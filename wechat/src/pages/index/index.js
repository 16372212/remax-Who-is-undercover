import * as React from 'react';
import {
  View,
  Image,
  CheckboxGroup,
  Checkbox,
  Label,
  Input,
  Text,
  navigateTo,
  onLocalServiceResolveFail,
  hideLoading,

} from 'remax/wechat';
import clsx from 'clsx';
import useUserInfo from '../../hooks/useUserInfo';
import AddButton from '@/components/ShineButton';
import LoginButton from '@/components/LoginButton';
import { TodoContext } from '@/app';
import logo from '@/assets/logo.png';
import none from '@/assets/none.png';

import './index.css';
import {Button, Popup,Tag,Stepper} from 'anna-remax-ui';
// import { Swiper, SwiperSlide } from 'swiper/react';

import { usePageEvent } from 'remax/macro';
import WxPostRequest from '../../hooks/wxPostRequest';

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

const wxGetUserInfo = require('../../hooks/wxGetUserInfo');






export default () => {
  const todo = React.useContext(TodoContext);
  const [count, setCount] = React.useState(0); // 用来控制Popup的出现和消失
  const [room_password_create, setRoomPassword] = React.useState(''); // 玩家设置的密码，用来创建某房间
  const [player_nums, setPlayerNums] = React.useState(); // roomSetting
  const [spy_num, setspy_num] = React.useState(1);             // roomSetting
  const [blank_num, setblank_num] = React.useState(0);           // roomSetting
  const [room_ID, inputRoomID] = React.useState();     // roomInfo
  const [room_password_user, inputRoomPassword] = React.useState(); // 玩家输入的密码，用来进入某房间
  const globalDatas = todo.globalData;

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

  usePageEvent('onHide', (option) => {
    console.log("-----on hide index---");
  });
 
  usePageEvent('onUnload', (option) => {
    console.log("-----on un load index---");
  });

  usePageEvent('onLoad', (option) => {
    console.log("============",option);
    wx.showLoading({
      title: '登录中',
      mask: true
    });
    // 1 首先获取用户UserInfo
    wxGetUserInfo.api.requestApi(1)
      .then(res_userInfo => {
        // 成功回调函数，已获取UserInfo信息(无后端交流)
        var temp_data = {};
        temp_data.userInfo = res_userInfo.userInfo;
        // 2 获取用户ID
        return new Promise((resolve, reject) => {
          wx.login({
            success (res) {
              // wx.hideLoading();
              if (res.code) {
                //发起网络请求
                let data = {code:res.code}; // 微信验证码
                let successFunc = function (resp) {
                  console.log("2 ID: ",resp); // resp包括Data,Message,Success三部分
                  if(resp.Data!= null){
                    temp_data.id = resp.Data;
                    console.log("2 now temp_data: ",temp_data);
                    resolve(temp_data);
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
                console.log("run onLoad CallBack");
                WxPostRequest(WxLoginUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc,false);
              }
            },
            fail: res=>{
              reject(res) //失败之后reject方法
            }
          })
        })
      })
      .then(res => {
        todo.setGlobalData(res);
        // 接下来更新用户信息，传入后端
        let data = {
          tempId: res.id,
          userInfo: JSON.stringify(res.userInfo)
        };
        console.log("用户信息: ",data);
        let successFunc = function (resp) {
          // 新加入的这个已经成功传入了
          if(option && option.room_ID){ // 判断用户是不是被邀请来的，如果是，就直接进入房间
            wx.showToast({
              title: '您想进入房间'+option.room_ID,
              icon: 'none'
            });
            console.log(res.id," 正在尝试进入的房间 ",option.room_ID);
            inputRoomID(option.room_ID);
            let data = {
              id: res.id,
              userInfo: res.userInfo
            }; 
            todo.setGlobalData(data);
            refreshGame_before_enter(option.room_ID, res.id); // 涉及到如果房间id失效
          }else{  // 用户不是被邀请进来的
            // 
            refreshGame_before_enter(null, res.id); // 涉及到，如果房间id失效
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
        WxPostRequest(UpdateUserInfoUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc,false);
      })
      .catch(res => {
      //失败回调函数
        // wx.hideLoading()
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 2000
        })
      })
  });

  function refreshGame_before_enter(res_roomid,res_userid){  // 更新信息，应该是有任何一个页面的行为都应该调用这个链接
    let data = {};
    data.tempId = res_userid; // 用户ID
    console.log("refresh请求数据：",data);
    let successFunc = function (resp) {
      console.log("refresh返回数据: ",resp);
      if(resp.Data!= null && resp.Data.roomInfo!=null){ // 属于某房间，直接跳转
        var new_data = {
          "roomId":res_roomid,
          "roomInfo":resp.Data.roomInfo
        };
        todo.setRoomInfo(new_data); 
        console.log("找到了属于的房间，正在进入");
        navigateTo({ url: '../new/index'});
      }else{ // 不属于任何房间
        console.log("本身不在房间，需要enter进入");
        if(res_roomid){ // 有邀请链接
          enterRoom(res_roomid,res_userid); 
        }else{
          console.log("本人refresh后发现不属于任何房间，且没受邀请"); // 没有邀请链接
        }
      }
    };
    let requestFailFunc = function () {
      wx.showToast({
        title: '服务器维护中',
        icon: 'none'
      })
    };
    let responseFailFunc = function (message) { // refresh之后发现
      wx.showToast({
        title: '房间ID失效了',
        icon: 'none'
      })
      console.log(message);
      console.log("enter前的refresh失败");
      if(res_roomid){
        console.log("但是被邀请了，refresh false也要尝试进入房间啊");
        enterRoom(res_roomid,res_userid);  
      }      
    };
    WxPostRequest(RefreshRoomUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc,false);
  }


  function refreshGame_before_create(res_userid,res_roomSetting){  // 更新信息，应该是有任何一个页面的行为都应该调用这个链接
    // 判断用户是不是在房间里，refresh如果不返回null，则跳转，否则创建
    let data = {};
    data.tempId = res_userid;
    wx.showLoading({
      title: '更新房间信息中',
    });
    console.log("refresh请求数据：",data);
    let successFunc = function (resp) { // refresh后发现user在房间里，能得到这种信息，则直接进入
      console.log("refresh返回数据: ",resp);
      if(resp.Data!= null  && resp.Data.roomInfo!=null){ // 更新发现可以收到房间的info，直接跳转
        var new_data = {
          "roomId":todo.roomInformation.roomId,
          "roomInfo":resp.Data.roomInfo
        };
        todo.setRoomInfo(new_data); 
        navigateTo({ url: '../new/index'});
      }else{ // 收不到房间info,说明用户没在房间里面, 则正常create房间
        console.log("create发现用户没在房间，则调用create");
        createNewRoom(res_roomSetting);
      }
      wx.hideLoading();
    };
    let requestFailFunc = function () {
      wx.showToast({
        title: '服务器维护中',
        icon: 'none'
      })
    };
    let responseFailFunc = function (message) { // refresh之后发现
      wx.showToast({
        title: '房间ID失效',
        icon: 'none'
      })
      console.log("create前的refresh失败");
      console.log("refresh false也要创建房间啊");
      console.log(message);
      createNewRoom(res_roomSetting);
    };
    WxPostRequest(RefreshRoomUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc,false);
  }


  // 输入房间设置信息，得到创建的房间ID, 然后再enterRoom进入该房间
  function createNewRoom(roomSetting){
    let data = {};
    data.tempId = globalDatas.id; // 用户ID
    data.roomSetting = JSON.stringify(roomSetting);
    console.log("create room申请数据： ",data);
    // 构建请求，得到roomID, 用roomID进入新房间
    let successFunc = function (resp) {
      console.log("create room返回数据: ",resp);
      // 构建房间返回的数据，更新todo.roomInfo
      if(resp.Data!= null && resp.Data.roomId!=null){
        todo.setRoomInfo(resp.Data); 
        navigateTo({ url: '../new/index' }); 
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
        title: '创建房间失败',
        icon: 'none'
      })
      console.log(message);
      console.log("create 失败了");
    };
    WxPostRequest(CreateNewRoomUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc,false);
  }

  // 向API输入要加入房间的ID，得到房间roomInfo
  function enterRoom(id_of_room,userid){
    let data = {};
    data.tempId = userid; // 用户ID
    data.roomId = id_of_room;
    console.log("enter room 申请数据: ",data);
    let successFunc = function (resp) {
      console.log("enter room返回数据: ",resp);
      if(resp.Data!= null){ // 进入房间成功，并更新房间信息
        resp.Data.roomId = id_of_room;
        todo.setRoomInfo(resp.Data); 
        console.log("这时候跳转界面",resp.Data);
        navigateTo({ url: '../new/index'});
      }else{ // 没有返回数据，不进入房间了吧
        // navigateTo({ url: '../new/index'}); 
        console.log("enter room没返回数据！！！！");
      }
    };
    let requestFailFunc = function () {
      wx.showToast({
        title: 'enterRoom服务器维护中',
        icon: 'none'
      })
    };
    let responseFailFunc = function (message) {
      wx.showToast({
        title: message,
        icon: 'none'
      })
    };
    WxPostRequest(EnterRoomUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc);
  }


  const handleCreate = () => {
    // 先refresh以下，然后判断
    setCount(1);
    var temp_roomSetting = todo.roomSetting;
    temp_roomSetting.total_num = player_nums;
    temp_roomSetting.spy_num = spy_num;
    temp_roomSetting.blank_num = blank_num;
    refreshGame_before_create(globalDatas.id,temp_roomSetting);
  }


  // 进入房间
  const handleIn = () =>{
    if(todo.onGame){ // 用户在游戏中
      wx.showToast({
        title: '您正在游戏中,正在为您返回该房间',
        icon: 'none'
      })
      navigateTo({ url: '../new/index'}); // promise 这里也应该是先赋值后再navigate
    }else{
      enterRoom(); // 利用ID从后端接口得到房间信息
    } 
  }

  const ajaxTry = () =>{
    var data = {};
    console.log("app globalData: ",globalDatas);
    console.log("room information: ",todo.roomInformation);
    // reuquirePost(WxLoginUrl,data);
  }

  return (
    <View className="top-yellow-background">
      <View className="user">
        {/* <Button type="primary" plain color="black"  onTap={ajaxTry}>ajax</Button> */}
        <LoginButton>
          <Image className="avatar" src={globalDatas.userInfo != null? globalDatas.userInfo.avatarUrl : logo} />
        </LoginButton>
        <View className="nickname">
          {globalDatas.userInfo? globalDatas.userInfo.nickName + " here" : "稍等正在登录~"} 
        </View>
      </View>
      
      <View className="todo-footer">
        {globalDatas.userInfo && <AddButton text="创建房间" onClick={() => 
          setCount(2)
        } />}

        <Popup
            open={todo.onGame}
            curve = "ease"
            onClose={() => {}}> 
            
          <View 
            style={{
              height: "400rpx",
              width:"600rpx",
              padding: "10rpx 25rpx",
              backgroundColor: "#323239",
            }}>
            <View>
              <Text className="InGame-white-text">检测出您还在房间里 </Text>
            </View>
            
            <Text className="InGame-small-white-text">若想退出，请先返回房间，再点击离开按钮</Text>
            <View className="normal_stepper">
              <AddButton text="返回房间" onClick={handleIn} />
              {/* <AddButton text="返回放" onClick={() =>  handleIn} /> */}
            </View>
          </View>
        </Popup>

        <Popup
            open={count==2}
            curve = "ease"
            onClose={() => {setCount(1)}}> 
          <View 
            style={{
              height: "600rpx",
              width:"400rpx",
              padding: "10rpx 25rpx",
              backgroundColor: "#323239",
            }}>
            <Text className="InGame-text">开始创建房间: </Text>
            <View className="normal_stepper">
              <Text className="InGame-small-text">房间人数: </Text>
              <Stepper plain value={player_nums} onChange={val => setPlayerNums(parseInt(val))}/> 
            </View>
            <View className="normal_stepper">
              <Text className="InGame-small-text">白板个数: </Text>
              <Stepper plain value={blank_num} min={0} max={player_nums-1} onChange={val => setblank_num(parseInt(val))}/>
            </View>
            <View className="normal_stepper">
              <Text className="InGame-small-text">卧底个数: </Text>
              <Stepper plain value={spy_num} min={1} max={player_nums-1-blank_num} onChange={val =>setspy_num(parseInt(val))}/>
            </View>
            <View className="normal_stepper">
              <Button Plain="primary" plain="true" color="black"  onTap={handleCreate}>创建房间！</Button> 
            </View>
          </View>
        </Popup>
      </View>

      {/* <View className="todo-footer">  
        {globalDatas.userInfo && <AddButton text="加入房间" onClick={() => 
          setCount(3)}/>}
          <Popup
            open={count==3}
            curve = "ease"
            onClose={() => {setCount(1)}}>
          <View 
            style={{
              height: "500rpx",
              padding: "10rpx 25rpx",
              backgroundColor: "#323239",
            }}>
            <Text className="InGame-text">房间ID和密码: </Text>
            <View>
              <Text className="InGame-small-text">房间ID </Text>
              <Input
                className="add-todo-input"
                placeholder="number of players?"
                onInput={e => inputRoomID(e.detail.value)}
                value={room_ID}/>
            </View>
            <View>
              <Text className="InGame-small-text">密码 </Text>
              <Input
                className="add-todo-input"
                placeholder="password of your room?"
                onInput={e => inputRoomPassword(e.detail.value)}
                value={room_password_user}/>
              </View>
              <Button type="primary" plain color="black" onTap={handleIn}>进入</Button> 
          </View>
        </Popup>
      </View> */}
      {/* <View>
        <Button onTap={()=>{navigateTo({ url: '../new/index'})}}>跳转</Button>   
      </View> */}
      <View className="bottom">
        <swiper indicator-dots="true" circular="true" autoplay="true" width="100%" interval="2000" duration="500" current="0">
          <swiper-item>
              <Image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" mode="widthFix"></Image>
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
