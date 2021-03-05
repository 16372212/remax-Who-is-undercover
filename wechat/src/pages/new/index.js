import * as React from 'react';
import { 
  View, 
  Input, 
  navigateBack, 
  Label,
  Text, 
  
} from 'remax/wechat';
import AddButton from '@/components/AddButton';
import { TodoContext } from '@/app';
import {Button, Popup,Tag} from 'anna-remax-ui';
import './index.css';

import {useState} from "react";
import MyCard from "./first-card";
import MyCard2 from "./second-card";
import WxPostRequest from '../../hooks/wxPostRequest'

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
  const [test,setTest] = React.useState(0);
  const [indexRoomInfo, setIndexRoomInfo] = React.useState(todo.roomInformation);
  var roomInformation = todo.roomInformation;
  const userId = todo.globalData.id;
  console.log("in index/new: info:",roomInformation);
  

  const leaveHome = () => {
    normalPost(ExitRoomUrl);
    refreshGame(); 
    navigateBack();
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

  // 在房主结束游戏后，如何处理房间不存在
  const endGame = () => {
    normalPost(EndGameUrl);
    refreshGame();
    navigateBack(); 
  }
  
  const changeWord = () => {
    normalPost(RestartGameUrl);
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
    // console.log("indexRoomInfo's state changes to ",indexRoomInfo.roomInfo.state);

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
  

  function normalPost(url){
    let data = {};
    data.tempId = userId;
    WxPostRequest(url, DefaultPostHeader, data);
  }

  
  function refreshGame(){  // 更新信息，应该是有任何一个页面的行为都应该调用这个链接
    let data = {};
    data.tempId = userId; // 用户ID
    // data.roomID = room_ID;        // 房间ID
    console.log("refresh a room: ",data);
    let successFunc = function (resp) { 
      console.log("create new room: ",resp);
      if(resp.Data!= null){ 
        // resp.Data.roomId = roomInformation.roomId;
        var new_data = {
          "roomId":roomInformation.roomId,
          "roomInfo":resp.Data.roomInfo
        };
        todo.setRoomInfo(new_data); // resp.Data信息需要轮询访问，每过一段时间访问一次
        console.log("new room information: ",new_data);
      }
    };
    let requestFailFunc = function () {
      wx.showToast({
        title: '服务器维护中',
        icon: 'none'
      })
    };
    let responseFailFunc = function () {
      wx.showToast({
        title: '登录失败',
        icon: 'none'
      })
    };
    console.log("run onLoad CallBack");
    WxPostRequest(RefreshRoomUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc);
  }
 
  return (
    <View className="top-yellow-background">
      <View className="content">
        <MyCard/>
        <View className="special-bottom">
          {roomInformation.roomInfo.master_open_id == userId ? <View className="special-bottom-middle">{"请玩家准备好了在开始"}</View>
            :<View className="special-bottom-middle">{"请玩家准备=>"}</View>
          }
          {roomInformation.roomInfo.master_open_id == userId ?<Button type="primary" plain color="black" onTap={beginGame}>开始</Button>:
            <Button type="primary" plain color="black" onTap={readyGame}>准备</Button>
          }
        </View>
      </View>
      
      {roomInformation.roomInfo.state=="Playing" && <View className = "content">
        <MyCard2/>
      </View>}

      <View>
        <AddButton text="退出房间" onClick={leaveHome} />
        <AddButton text="更新信息" onClick={handleRefresh} />
        {roomInformation.roomInfo.state == "Playing" && roomInformation.roomInfo.master_open_id == userId 
        &&<AddButton text="换词" onClick={changeWord}/>}
        <AddButton text="结束游戏" onClick={endGame}/> 
        <AddButton text="~改状态" onClick={changeState}/>
        <AddButton text="~改房主" onClick={changeRoot}/> 
        <Button type="primary" plain color="black" onTap={getRoonInfo}>roomInfo:</Button> 
      </View>
    </View>
  );
};

