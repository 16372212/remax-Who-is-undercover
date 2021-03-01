import * as React from 'react';
import './app.css';
import 'anna-remax-ui/dist/anna.css';
import 'anna-remax-ui/esm/button/style/css';
import { useAppEvent } from 'remax/macro';

export const TodoContext = React.createContext({});



const App = ({ children }) => { // 默认input

  const [globalData,setGlobalData]= React.useState({
    userInfo:null,
    id:null,
  });

  const [roomSetting, setRoomSetting] = React.useState(
    { spys:0,
      blank:0,
      total:0, // nums of rooms
    }
  );
  
  const [roomInfo, setRoomInfo] = React.useState(
    { roomID:"000000", // 这个ID并没有返回
      roomSetting: {spys:1,blank:1,total:7},
      masterOpenid:"000000", // string 房主的Openid
      playerList:[
        {openid:"000000",nickName:"user0",avatarUrl:"null",state:"Ready",word:"word1",role:"Normal",number:0},
        {openid:"000001",nickName:"user1",avatarUrl:"null",state:"Ready",word:"word2",role:"Spy",number:1},
        {openid:"000002",nickName:"user2",avatarUrl:"null",state:"Ready",word:"",role:"Blank",number:2},
        {openid:"000003",nickName:"user3",avatarUrl:"null",state:"Wait",word:"word1",role:"Normal",number:3},
        {openid:"000004",nickName:"user4",avatarUrl:"null",state:"Ready",word:"word1",role:"Normal",number:4},
        {openid:"000005",nickName:"user5",avatarUrl:"null",state:"Ready",word:"word1",role:"Normal",number:5},
      ], // player[] : openid,nickName,avatarUrl, state, word, role, number
      state:"Playing", // enum[Open, Wait, Ready, Playing]
      word:{
        id:"01", // string
        normal:"word1", // string
        spy:"word2", // string
        blank:"", // string
      },
      wordList:null,//此房间已经玩过的词汇列表
    }
  );
  
  const [items, setItems] = React.useState(
    { masterOpenid: "default userName", // the number of Room
      password:"default password", // password
      loginSuccess: false,
      roomID:0,
      playerList:null,
      state: null,
    }
  );

  return (
    <TodoContext.Provider
      value={{
        items,
        setItems,
        globalData,
        setGlobalData,
        roomSetting,
        setRoomSetting,
        roomInfo,
        setRoomInfo,
      }}
    >
      {children}
    </TodoContext.Provider>
 
  );
};

export default App;
