import React, { useState } from "react";
import { View, Label, Image, Text } from "remax/wechat";
import { TodoContext } from '@/app'
import {Button, Popup,Tag} from 'anna-remax-ui';
const userProductInfo = [
  {
    title: "房间",  // + 房间ID 
    specialBottom: {
      imageSrc: "/images/all.png",
      description: "请玩家准备",
    },
  },
];

const beginGame = () =>{
  // 准备
  // 向后端传入准备的信息
}

function MyCardAndPic(props) {
  const todo = React.useContext(TodoContext); 
  const flexWidthClass =
    todo.items.playerNums >= 4 ? "flex-width-4" : "flex-width-3";
  var tmp_images = [];
  for(let i=0;i<todo.items.playerNums;i++){
    tmp_images.push({
      id: i+1, // 从后端获取用户所属房间的ID
      imageSrc: "/images/ms.png", // 该用户的头像
      text: "用户"+(i+1), // 用户的nickName
    });
  }

  // const myPicImage = props.arrayImage.map((date) => {
  const myPicImage = tmp_images.map((date) => {
    return (
      <View key={date.id} className={flexWidthClass}>
        <Image className="myPic-image" src={date.imageSrc} /> 
        <View>{date.text}</View>  
      </View>
    );
  });

  return (
    <View className="card myCard">
      <View>{props.title}</View>  
      <View className="myPic">{myPicImage}</View>  {/*图像加名称(username + user url) */}
      <View className="special-bottom">
        <View><Image src={props.specialBottom.imageSrc} /></View> {/* "等玩家准备好..." 这段前面的图像 */}
        <View className="special-bottom-middle">{props.specialBottom.description}</View>
        <Button type="primary" plain color="black" onTap={beginGame}>准备</Button>
      </View>
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
