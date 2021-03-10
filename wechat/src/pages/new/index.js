import * as React from 'react';
import { 
  View, 
  Input, 
  navigateBack, 
  Label,
  Text, 
  Image
} from 'remax/wechat';
import AddButton from '@/components/ShineButton';
import { TodoContext } from '@/app';
import {Button, Popup,Tag} from 'anna-remax-ui';
import './index.css';
import { usePageEvent } from 'remax/macro';
import {useState} from "react";
import MyCard from "./first-card";
import MyCard2 from "./second-card";
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

const normalInfo = 
{ roomId:"", // 这个ID并没有返回
  roomInfo:{
    room_setting: {spy_num:1,blank_num:1,total_num:7},
    master_open_id:"000000", // string 房主的open_id
    player_list:[
      {open_id:"000000",nick_name:"user0",avatar_url:"null",state:"Ready",word:"word1",role:"Normal",number:0},
      {open_id:"000001",nick_name:"user1",avatar_url:"null",state:"Ready",word:"word2",role:"Spy",number:1},
      {open_id:"000002",nick_name:"user2",avatar_url:"null",state:"Ready",word:"",role:"Blank",number:2},
      {open_id:"000003",nick_name:"user3",avatar_url:"null",state:"Wait",word:"word1",role:"Normal",number:3},
      {open_id:"000004",nick_name:"user4",avatar_url:"null",state:"Ready",word:"word1",role:"Normal",number:4},
      {open_id:"000005",nick_name:"user5",avatar_url:"null",state:"Ready",word:"word1",role:"Normal",number:5},
    ], // player[] : open_id,nick_name,avatar_url, state, word, role, number
    state:"Ready", // enum[Open, Wait, Ready, Playing]
    word:{
      id:"01", // string
      normal:"word1", // string
      spy:"word2", // string
      blank:"", // string
    },
  word_cache:[],//此房间已经玩过的词汇列表
  }
}


export default () => {
  const todo = React.useContext(TodoContext); // back
  const [test,setTest] = React.useState(100);
  const [seeAnswer,setSeeAnswer] = React.useState(false);
  // const [leavePage,setLeavePage] = React.useState(100);
  const [indexRoomInfo, setIndexRoomInfo] = React.useState(todo.roomInformation);
  var roomInformation = todo.roomInformation;
  const userId = todo.globalData.id;
  var interval = null;
  usePageEvent('onShareAppMessage',(res)=>{
    console.log("转发！");
    if (res.from === 'button') { // 说明是通过邀请得到的
      return {
        title: '朋友邀请您玩谁是卧底！',
        path: 'pages/index/index?room_ID='+todo.roomInformation.roomId,
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
    if(!todo.onGame){ // 没有游戏中的话
      todo.setOnGame(true);
      // startInter();
    }
  });

  const leaveHome = () => { // 离开房间后再进入，todo可能对它就是null了，因此最好refresh一下
    console.log("结束计时");
    normalPost(ExitRoomUrl);
    todo.setOnGame(false);
    console.log("on game:", todo.onGame);
    refreshGame(); 
    // navigateBack();
  };

  
  const handleRefresh = () => {
    refreshGame();
  };

  const beginGame = () => {
    normalPost(StartGameUrl);
    refreshGame();
  };

  const readyGame = () => {
    console.log("ready game")
    normalPost(ReadyGameUrl);
    refreshGame();
  };

  // 在房主结束游戏, 显示房间的卧底牌
  const endGame = () => {
    normalPost(EndGameUrl);
    setSeeAnswer(true);
    console.log("see answer");
    // todo.setOnGame(false);
  
  }
  
  const changeWord = () => {
    normalPost(RestartGameUrl);
    refreshGame();
  }

  const changeState = () =>{
    var tmp_info = {};
    tmp_info.roomId = roomInformation.roomId;
    tmp_info.roomInfo = roomInformation.roomInfo;
    
    if(tmp_info.roomInfo.state == "Ready"){
      tmp_info.roomInfo.state = "Playing";
    }else{
      tmp_info.roomInfo.state = "Ready";
    }
    todo.setRoomInfo(tmp_info);
    console.log("indexRoomInfo's state changes to ",indexRoomInfo.roomInfo.state);

  }
  
  const isNotBegin = () =>{
    // 如果房间的状态等于playing
    if(roomInformation.roomInfo.state == "Playing"){     
      return true;
    }
    else{
      return false;
    }
  }

  const isNotReady = ()=>{
    // 找到用户，并且判断状态
    for(var i = 0;i<roomInformation.roomInfo.player_list.length;i++){  //循环LIST，实现浅拷贝
      var veh = roomInfo.player_list[i];
      if(veh.open_id == userId || veh.nick_name == todo.globalData.userInfo.nickName){ // 其实不应该判断用户的nick_name
        return veh.open_id == "Ready";
      }
    }
    // 没有从玩家列表中找到用户这个人
    wx.showLoading({
      title: '抱歉您暂时不属于这个房间',
      mask: true
    });
    return true;
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
        todo.setRoomInfo(new_data); // resp.Data信息需要轮询访问，每过一段时间访问一次
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
    clearInterval(interval);
    interval = setInterval(function(){
      refreshGame();  
    }, 2000); 
  }

  return (
    <View className="top-yellow-background">
      <View className="content">
        <MyCard/>
        <View className="special-bottom">
          {roomInformation.roomInfo.is_master? <View className="special-bottom-middle">{"请玩家准备好了在开始"}</View>
            :<View className="special-bottom-middle">{"请玩家准备=>"}</View>
          }
          {roomInformation.roomInfo.is_master?<Button type="primary" plain color="black" disabled={isNotBegin} onTap={beginGame}>开始</Button>:
            <Button type="primary" plain color="black" disabled={isNotReady} onTap={readyGame}>准备</Button>
          }
       
          <Button Plain="primary" open-type="share" plain="true" color="black">邀请好友</Button> 
        </View>
      </View>
      <Popup
            open={seeAnswer}
            curve = "ease"
            onClose={() => {setSeeAnswer(false)}}> 
          <View 
            style={{
              height: "200rpx",
              width:"500rpx",
              padding: "10rpx 25rpx",
            }}>
            <Text className="InGame-text">卧底词：{roomInformation.roomInfo.word["SpyWord"]}</Text>
            {/* 卧底牌，卧底头像，卧底名称，其他人的牌*/}
          </View>
        </Popup>

      {roomInformation.roomInfo.state=="Playing" && <View className = "content">
        <MyCard2/>
      </View>}

      {/* {roomInformation.roomInfo.state=="Playing" && endgame的操作 } */}
      <View>
        {roomInformation.roomInfo.state == "Playing" && roomInformation.roomInfo.is_master 
        &&<AddButton text="换卧底词" onClick={changeWord}/> 
        }
        
        {roomInformation.roomInfo.state == "Playing" && roomInformation.roomInfo.is_master 
        &&<AddButton text="查看卧底词" onClick={endGame}/> 
        }

        {roomInformation.roomInfo.is_master ?<AddButton text="结束游戏" onClick={leaveHome}/> :
          <AddButton text="退出房间" onClick={leaveHome} />
        }
       

        <AddButton text="~更新" onClick={handleRefresh}/> 
        <AddButton text="~改状态" onClick={changeState}/>
        {/* <AddButton text="~改房主" onClick={changeRoot}/>  */}
        {/* <AddButton text="~加用户" onClick={addPeople}/>  */}
        {/* <Button type="primary" plain color="black" onTap={getRoonInfo}>roomInfo:</Button> */}
      </View>
        
      <View className="bottom">
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
      </View>
    </View>
  );
};

