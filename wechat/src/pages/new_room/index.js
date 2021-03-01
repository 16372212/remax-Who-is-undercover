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

export default () => {
  const todo = React.useContext(TodoContext); // back
  const [text, setText] = React.useState('');

  const returnBack = () => {
    navigateBack();
  };
  
  console.log("in new/index,username: ",todo.userName);
  return (
    <View className="top-yellow-background">
      <View className="content">
      {/* card1 */}
        <MyCard/>
      </View>

      <View>
        <AddButton text="Return" onClick={returnBack} />

      </View>
    </View>
  );
};

//  {roomContext.items.map((item) => (
//           <Label
//             key={item.userInfo}
//             className={clsx('todo-item', {
//               checked: item.userInfo,
//             })}
//           >
//             <Checkbox
//               value={item.userInfo}
//               checked={item.loginSuccess}
//             />
//             {/* <Text>Welcome: {item.userInfo.nickName}</Text> */}
//           </Label>
//         ))}
