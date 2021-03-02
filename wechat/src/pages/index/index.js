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
} from 'remax/wechat';
import clsx from 'clsx';
import useUserInfo from '../../hooks/useUserInfo';
import AddButton from '@/components/AddButton';
import LoginButton from '@/components/LoginButton';
import { TodoContext } from '@/app';
import logo from '@/assets/logo.png';
import './index.css';
import {Button, Popup,Tag} from 'anna-remax-ui';
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
  const [user, login] = useUserInfo(); // 登录按钮
  const todo = React.useContext(TodoContext);
  const [count, setCount] = React.useState(0); // 用来控制Popup的出现和消失
  const [room_password_create, setRoomPassword] = React.useState(''); // 玩家设置的密码，用来创建某房间
  const [player_nums, setPlayerNums] = React.useState(); // roomSetting
  const [spys, setSpys] = React.useState();             // roomSetting
  const [blank, setBlank] = React.useState();           // roomSetting
  const [room_ID, inputRoomID] = React.useState();     // roomInfo
  const [room_password_user, inputRoomPassword] = React.useState(); // 玩家输入的密码，用来进入某房间
  const globalDatas = todo.globalData;


  usePageEvent('onLoad', () => {
    wx.showLoading({
      title: '登录中',
      mask: true
    });
    console.log("---onLoad---");

    wxGetUserInfo.api.requestApi(1)
      .then(res_userInfo => {
        //成功回调函数，已获取UserInfo信息
        var temp_data = {};
        temp_data.userInfo = res_userInfo.userInfo;
        // 获取用户ID
        return new Promise((resolve, reject) => {
          wx.login({
            success (res) {
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
                let responseFailFunc = function () {
                    wx.showToast({
                        title: '登录失败',
                        icon: 'none'
                    })
                };
                // console.log("run onLoad CallBack");
                WxPostRequest(WxLoginUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc);
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
        console.log("updateUserInfo: ",data);
        WxPostRequest(UpdateUserInfoUrl, DefaultPostHeader, data);
      })
      .catch(res => {
      //失败回调函数
        wx.hideLoading()
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 2000
        })
      })
  })

  // 输入房间设置信息，得到创建的房间ID, 然后再enterRoom进入该房间
  function createNewRoom(roomSetting){
    let data = {};
    data.tempId = globalDatas.id;
    data.roomSetting = JSON.stringify(roomSetting);
    console.log("create new room: ",data);
    // 构建请求，得到roomID, 用roomID进入新房间
    let successFunc = function (resp) {
      console.log("create new room: ",resp);
      // 构建房间返回的数据，更新todo.roomInfo
      if(resp.Data!= null){
        inputRoomID(resp.Data);
        console.log("new room ID: ",room_ID);
        enterRoom();  
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
    WxPostRequest(CreateNewRoomUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc);
  }

  // 向API输入要加入房间的ID，得到房间roomInfo
  function enterRoom(){
    let data = {};
    data.tempId = globalDatas.id; // 用户ID
    data.roomID = room_ID;        // 房间ID
    console.log("in a room: ",data);

    let successFunc = function (resp) {
      console.log("create new room: ",resp);
      // 构建房间返回的数据，更新todo.roomInfo
      if(resp.Data!= null){ 
        todo.setRoomInfo(resp.Data); // resp.Data信息需要轮询访问，每过一段时间访问一次
        inputRoomID(resp.Data);
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
    WxPostRequest(EnterRoomUrl, DefaultPostHeader, data, successFunc, requestFailFunc, responseFailFunc);
  }

  const handleCreate = () => {
    var temp_items = todo.items; // items都可以删掉
    temp_items.userName = user? user.nickName:"none";
    temp_items.playerNums = player_nums;
    temp_items.password = room_password_create;
    temp_items.loginSuccess = user? true:false;
    todo.setItems(temp_items);

    var temp_roomSetting = todo.roomSetting;
    temp_roomSetting.total = player_nums;
    temp_roomSetting.spys = spys;
    temp_roomSetting.blank = blank;
    todo.setRoomSetting(temp_roomSetting);
    console.log("index| globaldata： ",todo.globalData);
    console.log("index| after setting, todo.roomSetting: ",todo.roomSetting);
    createNewRoom(temp_roomSetting); // 后端接口: 创建房间，返回房间ID，再利用ID从后端接口得到房间信息
    navigateTo({ url: '../new/index' }); // 跳转链接应该使用promise？ 可以后来再实现promise,运行好createNewRoom之后才跳转
  }

  // 进入房间
  const handleIn = () =>{
    enterRoom(); // 利用ID从后端接口得到房间信息
    navigateTo({ url: '../new/index'});
  }

  const ajaxTry = () =>{
    var data = {};
    console.log("app globalData: ",globalDatas);
    // reuquirePost(WxLoginUrl,data);
  }

  return (
    <View className="top-yellow-background">
      <View className="user">
        <LoginButton login = {login}>
          <Image className="avatar" src={user != null? user.avatar : logo} />
        </LoginButton>

        <View className="nickname">
          {user? user.nickName + " here" : "Please login!"} 
          {user && <Text className="login-tip">(Tap to login ↑)</Text>}
        </View>
      </View>
      <Button Plain="primary" plain="true" color="black"  onTap={ajaxTry}>ajax</Button> 

      <View className="todo-footer">
        {user && <AddButton text="创建房间" onClick={() => 
          setCount(2)
        } />}
      
        <Popup
            open={count==2}
            curve = "ease"
            onClose={() => {setCount(1)}}> 
          <View 
            style={{
              height: "700rpx",
              padding: "10rpx 25rpx",
              backgroundColor: "#323239",
            }}>
            <Text className="InGame-text">开始创建房间:</Text>
            <View>
              <Text className="InGame-small-text">房间人数:</Text>
              <Input
                className="add-todo-input"
                placeholder="number of players?"
                onInput={e => setPlayerNums(parseInt(e.detail.value))
                }
                value={parseInt(player_nums)}
              />
            </View>

            <View>
              <Text className="InGame-small-text">设置密码</Text>
              <Input
                className="add-todo-input"
                placeholder="please set password of your room"
                onInput={e => setRoomPassword(e.detail.value)}
                value={room_password_create}
              />
            </View>

            <View>
              <Text className="InGame-small-text">白板个数</Text>
              <Input
                className="add-todo-input"
                placeholder="please set blank nums"
                onInput={e => setBlank(parseInt(e.detail.value))}
                value={parseInt(blank)}
              />
            </View>
            <View>
              <Text className="InGame-small-text">卧底个数</Text>
              <Input
                className="add-todo-input"
                placeholder="please set password of your room"
                onInput={e => setSpys(parseInt(e.detail.value))}
                value={parseInt(spys)}
              />
            </View>

            <Button Plain="primary" plain="true" color="black"  onTap={handleCreate}>创建房间！</Button> 
          </View>
        </Popup>
      </View>

      <View className="todo-footer">  
        {user && <AddButton text="加入房间" onClick={() => 
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
            <Text className="InGame-text">房间ID和密码:</Text>
            <View>
              <Text className="InGame-small-text">房间ID</Text>
              <Input
                className="add-todo-input"
                placeholder="number of players?"
                onInput={e => inputRoomID(e.detail.value)}
                value={room_ID}/>
            </View>
            <View>
              <Text className="InGame-small-text">密码</Text>
              <Input
                className="add-todo-input"
                placeholder="password of your room?"
                onInput={e => inputRoomPassword(e.detail.value)}
                value={room_password_user}/>
              </View>
              <Button type="primary" plain color="black" onTap={handleIn}>进入</Button> 
          </View>
        </Popup>

      </View>
    </View>
  
  );
};
