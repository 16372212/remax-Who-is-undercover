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
{ roomID:"", // 这个ID并没有返回
    roomSetting: {spys:null,blank:null,total:null},
    masterOpenid:"000000", // string 房主的Openid
    playerList:[], // player[] : openid,nickName,avatarUrl, state, word, role, number
    state:"Wait", // enum[Open, Wait, Ready, Playing]
    word:{},
    wordList:null,//此房间已经玩过的词汇列表
  }

export default () => {
  const todo = React.useContext(TodoContext); // back
  var roomInfomation = todo.roomInfo;
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
    // todo.globalData.
    normalPost(ReadyGameUrl);
    refreshGame();
  };

  // 在房主结束游戏后，如何处理房间不存在
  const endGame = () => {
    normalPost(EndGameUrl);
    // todo.setRoomInfo(normalPost);
    refreshGame();
    navigateBack(); 
  }
  
  const changeWord = () => {
    normalPost(RestartGameUrl);
  }

  const changeState = () =>{
    var tmp_info = roomInfomation;
    tmp_info.state = "Ready";
    todo.setRoomInfo(tmp_info);
    console.log(todo.roomInfo.state);
  }
  
  const changeRoot = () => {
    var tmp_info = roomInfomation;
    tmp_info.masterOpenid = todo.globalData.id;
    todo.setRoomInfo(tmp_info);
    console.log(todo.roomInfo.masterOpenid);
  }

  function normalPost(url){
    let data = {};
    data.tempId = todo.globalData.id;
    WxPostRequest(url, DefaultPostHeader, data);
  }

  // 更新信息，应该是有任何一个页面的行为都应该调用这个链接
  function refreshGame(){
    let data = {};
    data.tempId = todo.globalData.id; // 用户ID
    // data.roomID = room_ID;        // 房间ID
    console.log("refresh a room: ",data);
    let successFunc = function (resp) {
      console.log("create new room: ",resp);
      // 构建房间返回的数据，更新todo.roomInfo
      if(resp.Data!= null){ 
        todo.setRoomInfo(resp.Data); // resp.Data信息需要轮询访问，每过一段时间访问一次
        console.log("new room information: ",resp.Data);
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

  
  console.log("in new,username: ",todo.items.userName);
  return (
    <View className="top-yellow-background">
      <View className="content">
        {/* 判断，如果房间状态属于Wait人已满，Open人未满, Ready*/}
        <MyCard/>
        <View className="special-bottom">
          {console.log(
            "compare id: ",roomInfomation.masterOpenid," ",todo.globalData.id
          )}
          {roomInfomation.masterOpenid == todo.globalData.id && <View className="special-bottom-middle">{"请玩家准备好了在开始"}</View>}
          {roomInfomation.masterOpenid != todo.globalData.id && <View className="special-bottom-middle">{"请玩家准备=>"}</View>}
          {roomInfomation.masterOpenid == todo.globalData.id &&<Button type="primary" plain color="black" onTap={beginGame}>开始</Button>}
          {roomInfomation.masterOpenid != todo.globalData.id && <Button type="primary" plain color="black" onTap={readyGame}>准备</Button> }
        </View>
      </View>
      
      {roomInfomation.state == "Playing" && <View className = "content">
        <MyCard2/>
        
      </View>}
      <View>
        <AddButton text="退出房间" onClick={leaveHome} />
        <AddButton text="更新信息" onClick={handleRefresh} />
        {roomInfomation.state == "Playing" && <AddButton text="换词" onClick={changeWord}/>}
        <AddButton text="结束游戏" onClick={endGame}/> 
        <AddButton text="测试按钮：改状态" onClick={changeState}/>
        <AddButton text="测试按钮：改房主" onClick={changeRoot }/>  
      </View>
    </View>
  );
};

