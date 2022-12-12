import React from 'react'
import Messages from "./Messages";
import Input  from "./Input";
import { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
  const {data} = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className='chatIcons'>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat
