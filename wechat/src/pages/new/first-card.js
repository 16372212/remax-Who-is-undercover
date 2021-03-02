import React, { useState } from "react";
import { View, Label, Image, Text } from "remax/wechat";
import { TodoContext } from '@/app'
import {Button, Popup,Tag} from 'anna-remax-ui';
import logo from '@/assets/logo.png';
import none from '@/assets/none.png';
import WxPostRequest from '../../hooks/wxPostRequest'


const default_user_Info = {openid:"######",nickName:"",avatarUrl:none,state:"",word:"",role:"",number:null};
const userProductInfo = [
  {
    title: "房间",  // + 房间ID 
    specialBottom: {
      imageSrc: "/images/all.png",
      description: "请等玩家都准备好再开始游戏",
    },
  },
];


function MyCardAndPic(props) {
  const todo = React.useContext(TodoContext);
  var roomInfo = todo.roomInfo; // 用户信息需要实时更新的

  const flexWidthClass =
    roomInfo.roomSetting.total >= 4 ? "flex-width-4" : "flex-width-3";
  var tmp_images = roomInfo.playerList; // 得到用户nickName, avatar信息等

  
  var tmp_images_not_full = tmp_images;
  var num_diff = roomInfo.roomSetting.total - roomInfo.playerList.length; 

  if (num_diff == 0){  // 房间已经满了
    tmp_images_not_full = tmp_images;
    console.log("房间满了",roomInfo.playerList.length);
  }
  else{  // 房间没有满
    for(var i = 0;i<num_diff ; i++){
      tmp_images_not_full.push(default_user_Info); 
    }    
    console.log("没满 ",num_diff," :",roomInfo.playerList.length);
    console.log(tmp_images_not_full);
  }

  const myPicImage = tmp_images_not_full.map((date) => {
    return (
      <View key={date.openid} className={flexWidthClass}>
        <Image className="myPic-image" src={date.avatarUrl=="null"?logo:date.avatarUrl} /> 
        <View>{date.nickName}</View>  
        <View>{date.state}</View>  
      </View>
    );
  });

  return (
    <View className="card myCard">
      <View>{props.title}</View>  
      <View className="myPic">{myPicImage}</View>  {/*图像加名称(username + user url) */}
    </View>
  );
}

export default () => {
  

  const MyCardAndPics = userProductInfo.map((date) => {
    return (
      <MyCardAndPic
        key={date.title}
        title={date.title}
        arrayImage={date.arrayImage}
        specialBottom={date.specialBottom}
      />
    );
  });
  return <View>{MyCardAndPics}</View>;
};
