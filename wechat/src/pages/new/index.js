import * as React from 'react';
import { 
  View, 
  Input, 
  navigateBack, 
  Label,
  Text, 
  Button,
} from 'remax/wechat';
import AddButton from '@/components/AddButton';
import { TodoContext } from '@/app';
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
      </View>
      <View className = "content">
        {roomInfomation.state == "Playing" && <MyCard2/>}
        {console.log("room state: ",roomInfomation.state)}
      </View>
      <View>
        <AddButton text="退出房间" onClick={leaveHome} />
        <AddButton text="更新信息" onClick={handleRefresh} />
      </View>
    </View>
  );
};

