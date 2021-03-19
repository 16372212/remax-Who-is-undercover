import React, { useState } from "react";
import { View, Label, Image, Text } from "remax/wechat";
import { TodoContext } from '@/app'
import {Button, Popup,Tag, Icon} from 'anna-remax-ui';
import logo from '@/assets/logo.png';
import none from '@/assets/none.png';
import WxPostRequest from '../../hooks/wxPostRequest'


// var default_user_Info = {open_id:"#1",nick_name:"",avatar_url:none,state:"",word:"",role:"",number:null};
const userProductInfo = [
  {
    title: "答案：",  // + 房间ID 
    specialBottom: {
      imageSrc: "/images/all.png",
      description: "等待玩家重新开始游戏",
    },
  },
];


function MyCardAndPic(props) {
  const todo = React.useContext(TodoContext);
  var roomInfo = todo.roomInformation.roomInfo; 
  const flexWidthClass = "flex-width-1";
  var tmp_images_not_full = [];
  for(var i = 0;i<roomInfo.player_list.length;i++){  //循环LIST，实现浅拷贝
     var veh = roomInfo.player_list[i];
     tmp_images_not_full.push(veh);  
  }
 
  const myPicImage = tmp_images_not_full.map((date) => {
    return (
      <View key={date.open_id} className={flexWidthClass}>
        <View className="img-view">
          <Image className="myPic-image-answer" src={date.avatar_url} />
        </View>
        <View>{date.nick_name}</View>  
        <View>{date.word}</View>  
      </View>
    );
  });

  return (
    <View className="special-bottom">
      <View >{myPicImage}</View>  {/*图像加名称(username + user url) */}
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
  return <View className="card rule-card">
        <View className="white-text">答案:</View>
          {MyCardAndPics}
        </View>;
};
