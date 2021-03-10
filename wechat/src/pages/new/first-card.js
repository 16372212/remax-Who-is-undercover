import React, { useState } from "react";
import { View, Label, Image, Text } from "remax/wechat";
import { TodoContext } from '@/app'
import {Button, Popup,Tag} from 'anna-remax-ui';
import logo from '@/assets/logo.png';
import none from '@/assets/none.png';
import WxPostRequest from '../../hooks/wxPostRequest'


// var default_user_Info = {open_id:"#1",nick_name:"",avatar_url:none,state:"",word:"",role:"",number:null};
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
  var roomInfo = todo.roomInformation.roomInfo; // 用户信息需要实时更新的
  const flexWidthClass =
    roomInfo.room_setting.total_num >= 4 ? "flex-width-4" : "flex-width-3";
  // var tmp_images = roomInfo.player_list; // 得到用户nick_name, avatar信息等
  var tmp_images_not_full = [];
  // tmp_images_not_full = roomInfo.player_list; // 如果像这样直接赋值，就会改变roomInfo的内容，因为赋值成了地址（深拷贝
  for(var i = 0;i<roomInfo.player_list.length;i++){  //循环LIST，实现浅拷贝
     var veh = roomInfo.player_list[i];
     tmp_images_not_full.push(veh);  
  }
  var num_diff = roomInfo.room_setting.total_num- roomInfo.player_list.length; 
 
  if (num_diff <= 0){  // 房间已经满了  
    console.log("房间满了",roomInfo.player_list.length);
  }
  else{  // 房间没有满
    for(var i = 0;i<num_diff ; i++){
      var default_user_Info = {open_id:i,nick_name:"空座位",avatar_url:none,state:"",word:"",role:"",number:null};
      tmp_images_not_full.push(default_user_Info); // 房间没满，硬生生增添几个人数
    }    
  }

  const myPicImage = tmp_images_not_full.map((date) => {
    return (
      <View key={date.open_id} className={flexWidthClass}>
        <Image className="myPic-image" src={date.avatar_url=="null"?logo:date.avatar_url} /> 
        <View>{date.nick_name}</View>  
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
