import * as React from 'react';
import { 
  View, 
  Input, 
  navigateBack, 
  Label,
  Text, 
  Image
} from 'remax/wechat';
import AddButton from '@/components/AddButton';
import { TodoContext } from '@/app';
import {Button, Popup,Tag,Icon} from 'anna-remax-ui';
import './index.css';
import { usePageEvent } from 'remax/macro';
import {useState} from "react";
import MyCard from "./first-card";
import MyCard2 from "./second-card";
import AnswerCard from "./answer-card";
import RulesCard from "./rules-card";
import WxPostRequest from '../../hooks/wxPostRequest'
import logo from '@/assets/logo.png';
import none from '@/assets/none.png';
const DefaultPostHeader = {
  "Content-Type": "application/x-www-form-urlencoded"
};
const FilePostHeader = {
    "Content-Type": "multipart/form-data"
};
const JsonPostHeader = {
    "Content-Type": "application/json"
};
const TextPostHeader = {
    "Content-Type": "text/xml"
};
const server = "http://81.70.201.7:9205";    // http://81.70.201.7:9205/user/wx_login            
const WxLoginUrl = server + "/user/wx_login";
const UpdateUserInfoUrl = server + "/user/update_userInfo";
const CreateNewRoomUrl = server + "/room/new_room"; // http://81.70.201.7:9205/user/room/new_room
const EnterRoomUrl = server + "/room/enter_room";
const ExitRoomUrl = server + "/room/exit_room";
const RefreshRoomUrl = server + "/room/refresh_room";
const ReadyGameUrl = server + "/game/ready_game";
const StartGameUrl = server + "/game/start_game";
const EndGameUrl = server + "/game/end_game";
const RestartGameUrl = server + "/game/restart_game";
var interval = null;


export default () => {
  const todo = React.useContext(TodoContext); // back
  const [test,setTest] = React.useState(100);
  const [seeAnswer,setSeeAnswer] = React.useState(false);
  // const [roomInformation,setRoomInfo] = React.use
  const roomInformation = todo.roomInformation;
  const userId = todo.globalData.id;

  usePageEvent('onShareAppMessage',(res)=>{
    console.log("转发！");
    if (res.from === 'button') { // 说明是通过邀请得到的
      return {
        title: '朋友邀请您玩谁是卧底！',
        path: 'pages/index/index?room_ID='+roomInformation.roomId,
        success: function(res) {
        // 转发成功
        },
        fail: function(res) {
          // 转发失败
        }
      }
      console.log(res.target)
    }else{ // 正常转发
      return {
        title: '朋友邀请您玩谁是卧底！',
        path: 'pages/index/index'
      }
    } 
  });

  usePageEvent('onLoad', (option) => {
    console.log(" on game!~~~");
    startInter();
    if(!todo.onGame){ // 没有游戏中的话
      todo.setOnGame(true);
    }
  });

  usePageEvent('onHide', (option) => {
    console.log("-------------new 页面hide------------");
  });
  
  usePageEvent('onUnload', (option) => {
    console.log("-------------new 页面unload------------");
    stopInter();
    // todo.setOnGame(true);
  });

  const leaveHome = () => { // 离开房间后再进入，todo可能对它就是null了，因此最好refresh一下
    // 判断状态是否是ready, 如果是，则调用ready_game, 然后再调用exit
    var find = false;
    for(var i = 0;i<roomInformation.roomInfo.player_list.length;i++){  //循环LIST，实现浅拷贝
      var veh = roomInformation.roomInfo.player_list[i];
      console.log("对比",veh.nick_name," ",todo.globalData.userInfo.nick_name);
      if(veh.nick_name == todo.globalData.userInfo.nickName){ // 其实不应该判断用户的nick_name
        // return veh.open_id == "Ready";
        find = true;
        console.log("找到了这个用户");
        if(veh.state == "Ready"){
          console.log("it was ready");
          let data = {};
          data.tempId = userId;
          console.log("执行ready");
          let successFunc = function (resp) { 
            console.log("执行exit!");
            normalPost(ExitRoomUrl);
          };
          WxPostRequest(ReadyGameUrl, DefaultPostHeader, data,successFunc);
        }else{
          normalPost(ExitRoomUrl); //如果没有准备，就可以直接离开游戏
        }
        break;
      }
    }
    navigateBack();
    todo.setOnGame(false);
    console.log("是否在游戏中:", todo.onGame);
    if(!find){
      console.log("你没在这个房间里");
      normalPost(ExitRoomUrl);
    }
    stopInter();
  };

  
  const handleRefresh = () => {
    refreshGame();
  };

  const beginGame = () => {
    normalPost(StartGameUrl);
    refreshGame();
  };

  const readyGame = () => {
    console.log("ready game");
    // 放一个加圈圈的
    wx.showToast({
      title: '操作成功',
      icon: 'true'
    })
    normalPost(ReadyGameUrl);
    refreshGame();
  };

  // 在房主结束游戏, 显示房间的卧底牌
  const endGame = () => {
    normalPost(EndGameUrl);
    // stopInter();
    // navigateBack();
    // todo.setOnGame(false);
  }
  
  const changeWord = () => {
    normalPost(RestartGameUrl);
    refreshGame();
  }

  const changeState = () =>{
    console.log("---change state: ---");
    var tmp_info = {};
    tmp_info.roomId = roomInformation.roomId;
    tmp_info.roomInfo = roomInformation.roomInfo;
    
    if(tmp_info.roomInfo.state == "Ready"){
      console.log("Clearing"); 
      tmp_info.roomInfo.state = "Clear";
    }else if(tmp_info.roomInfo.state == "Clear") {
      console.log("playing"); 
      tmp_info.roomInfo.state = "Playing";
    }else{
      tmp_info.roomInfo.state = "Ready";
      console.log("Ready"); 
    }
    todo.setRoomInfo(tmp_info);
  }
  
  const isNotBegin = () =>{
    // 如果房间的状态等于playing
    if(roomInformation.roomInfo.state == "Ready" ||roomInformation.roomInfo.state == "Clear" ){     
      return false;
    }
    else{
      return true;
    }
  }

  const returnYourWord = ()=>{
    for(var i = 0;i<roomInformation.roomInfo.player_list.length;i++){  //循环LIST，实现浅拷贝
      var veh =roomInformation.roomInfo.player_list[i];
      if(veh.open_id == userId || veh.nick_name == todo.globalData.userInfo.nickName){ // 其实不应该判断用户的nick_name
        // return veh.open_id == "Ready";
        return veh.word;
       }
    }
    console.log("没有找到您的词");
    return "?";
  }
  

  const isReady = ()=>{
    // 找到用户，并且判断状态
    for(var i = 0;i<roomInformation.roomInfo.player_list.length;i++){  //循环LIST，实现浅拷贝
      var veh =roomInformation.roomInfo.player_list[i];
      if(veh.open_id == userId || veh.nick_name == todo.globalData.userInfo.nickName){ // 其实不应该判断用户的nick_name
        // return veh.open_id == "Ready";
        console.log("找到了这个用户");
        if(veh.state == "Ready"){
          console.log("用户的状态是ready,现在取消准备");
          return "取消准备";
        }else{
          console.log("用户还没准备，马上！");
          return "准备";
        }
      }
    }
    // // 没有从玩家列表中找到用户这个人
    // wx.showLoading({
    //   title: '抱歉您暂时不属于这个房间',
    //   mask: true
    // });
    
    return "观战ing";
  }

  const changeRoot = () => {  // react只要props改变，就会重新渲染
    var tmp_info = {};  // 只要setTest里面赋的值拥有的是新的地址，就可以即使渲染。但如果直接等于indexRoomInfo，则不会导致渲染
    tmp_info.roomId = roomInformation.roomId;
    tmp_info.roomInfo = roomInformation.roomInfo;
    if(tmp_info.roomInfo.master_open_id == userId){
      tmp_info.roomInfo.master_open_id="00000";
    }else{
      tmp_info.roomInfo.master_open_id = userId;
    }
    // setIndexRoomInfo(tmp_info);  
    console.log("change root了");
    todo.setRoomInfo(tmp_info);
  }

  const getRoonInfo = () =>{
    console.log(roomInformation);
  }
  
  const addPeople = () =>{
    var tmp_info = {};  // 只要setTest里面赋的值拥有的是新的地址，就可以即使渲染。但如果直接等于indexRoomInfo，则不会导致渲染
    tmp_info.roomId = roomInformation.roomId;
    tmp_info.roomInfo = roomInformation.roomInfo;
    var userLists = tmp_info.roomInfo.player_list;
    userLists.push({open_id:test,nick_name:"beauty",avatar_url:logo, state:"Ready",word:"",role:"",number:null});
    setTest(test+1); // 加上这个就会多刷新一次, 但是临时增加的人的id不会重复
    tmp_info.roomInfo.player_list = userLists;
    todo.setRoomInfo(tmp_info);
    console.log("add people");
  };

  function normalPost(url){
    let data = {};
    data.tempId = userId;
    WxPostRequest(url, DefaultPostHeader, data);
  }

  
  function refreshGame(){  // 更新信息，应该是有任何一个页面的行为都应该调用这个链接
    let data = {};
    data.tempId = userId; // 用户ID
    let successFunc = function (resp) { 
      console.log("refresh请求数据：",data);
      console.log("refresh返回数据: ",resp);
      if(resp.Data!= null){ 
        var new_data = {
          "roomId":roomInformation.roomId,
          "roomInfo":resp.Data.roomInfo
        };
        todo.setRoomInfo(new_data); 
        console.log("------房间状态: ",roomInformation.roomInfo.state,"--> new data: ",new_data.roomInfo.state); 
      }
    };
    let requestFailFunc = function () {
      wx.showToast({
        title: '服务器维护中',
        icon: 'none'
      })
    };
    let responseFailFunc = function (message) {
      wx.showToast({
        title: message,
        icon: 'none'
      })
    };
    WxPostRequest(RefreshRoomUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc,true);
  }

  function startInter(){
    if(interval){
      clearInterval(interval);
      interval = null;
    }
    interval = setInterval(refreshGame,1100);//启动计时器，调用overs函数，
    console.log("启动轮询访问--");
  }
  
  function stopInter(){
    console.log("停止轮询访问--");
    clearInterval(interval);
    interval = null;
  }
  

  return (
    <View className="total-content">
      <View className="top-yellow-background">
        {/* left */}
        <MyCard/>

        {/* mid  */}
        <View className = "mid-content">
          <View className="mid-button-content">
            {roomInformation.roomInfo.is_master?<Button size="superlarge" disabled={isNotBegin()} onTap={beginGame}
             >开始</Button>:
              <Button size="superlarge" disabled={roomInformation.roomInfo.state=="Playing"} onTap={readyGame}>{isReady()}</Button>
            }          
          </View>
          <View className="mid-draw-content"> 
            <View className="staff"></View>
            {roomInformation.roomInfo.state =="Playing" && <MyCard2/>}
            {roomInformation.roomInfo.state == "Clear"&&<AnswerCard/>  }
            {roomInformation.roomInfo.state != "Playing" && roomInformation.roomInfo.state != "Clear"  &&<RulesCard/>  }
          </View>
        </View>
        
        {/* left */}
        <MyCard/>
      </View>      
        <View className="low-content">
          {/* <AddButton text="换卧底词"  disable={roomInformation.roomInfo.state != "Playing"} onClick={changeWord}/>  */}
          {/* <AddButton text="结束并查看卧底词" disabled={true} onClick={endGame}/>  */}
          <View className="buttons-view">
            {roomInformation.roomInfo.is_master 
            &&<Button plain color="#d1cdda" size="large" disabled={roomInformation.roomInfo.state!="Playing"} onTap={changeWord}
              icon={<Icon type="forwardfill" size="85px" color="#d1cdda" />}> 换词</Button>}
            
            {roomInformation.roomInfo.is_master 
            &&<Button  plain color="#d1cdda"  size="large" disabled={roomInformation.roomInfo.state!="Playing"} onTap={endGame}
              icon={<Icon type="creativefill" size="85px" color="#d1cdda" />}>
              答案
            </Button>
            }
            <Button plain color="#d1cdda"  size="large" disabled={roomInformation.roomInfo.state=="Playing"} onTap={leaveHome}
              icon={<Icon type="exit" size="85px" color="#d1cdda" />}>
              退出</Button>
            {/* <AddButton text="退出房间" disabled={roomInformation.roomInfo.state=="Playing"} onClick={leaveHome} /> */}
          
            <Button  plain color="#d1cdda"  size="large" open-type="share" icon={<Icon type="addressbook" size="85px" color="#d1cdda" />}>
                邀请</Button> 
          </View>
          {/* <AddButton text="~开始计时" onClick={startInter}/>  */}
          {/* <Button onTap={stopInter}>~停止计时</Button>         */}
          {/* <AddButton text="~更新" onClick={handleRefresh}/>  */}
          {/* <Button  onTap={changeState}>~改状态</Button> */}
          {/* <AddButton text="~改房主" onClick={changeRoot}/>  */}
          {/* <AddButton text="~加用户" onClick={addPeople}/>  */}
          {/* <Button type="primary" plain color="black" onTap={getRoonInfo}>roomInfo:</Button> */}
          
        </View>

        {/* <View className="bottom">
          <swiper indicator-dots="true" circular="true" autoplay="true" interval="2000" duration="500" current="0">
            <swiper-item>
                <Image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" width="100%"></Image>
            </swiper-item>
            <swiper-item>
                <Image src="http://bing.getlove.cn/bingImage" width="100%"></Image>
            </swiper-item>
            <swiper-item>
                <Image src={none} width="100%"></Image>
            </swiper-item>
          </swiper> 
        </View> */}
      
    </View>
  );
};

