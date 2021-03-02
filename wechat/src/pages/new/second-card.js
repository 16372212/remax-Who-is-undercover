import React, { useState } from "react";
import { View, Label, Image, Text } from "remax/wechat";
import { TodoContext } from '@/app'
import {Button, Popup,Tag} from 'anna-remax-ui';
import logo from '@/assets/logo.png';

export default () => {
    const todo = React.useContext(TodoContext);
    var roomInfo = todo.roomInfo; // 用户信息需要实时更新的
    var tmp_images = roomInfo.playerList; // 得到用户nickName, avatar信息等
    const myPicImage = tmp_images.map((date) => { // 循环找到该用户对应的word信息
        // if (date.openid == todo.globalData.id){
        if (date.openid == "000003"){
          return (
        <View>{date.word}</View>
          );
      }
    }); 

    

    return(
        <View className="card myCard">
            <View className="special-bottom">
              {myPicImage }
            </View>
        </View>
    ); 
};
