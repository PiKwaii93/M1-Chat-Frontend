<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Message from './Components/Atoms/Message';
import Input from './Components/Atoms/Input';
import Icon from './Components/Atoms/Icon';
import Image from './Components/Atoms/Image';
import Avatar from './Components/Atoms/Avatar';

const socket = io('http://localhost:5000');
=======
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import ChatPage from "./components/ChatPage";
import socketIO from "socket.io-client"
>>>>>>> c9a20ad297192d6750a8f26e502135319acf90c0

const socket = socketIO.connect("http://localhost:4000")
function App() {
<<<<<<< HEAD
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = () => {
    socket.emit('sendMessage', { text: messageText });
    setMessageText('');
  };

  let isConnected = false;

  return (
    <div className="App">
      <h1>Real-Time Chat App</h1>
      <div className="messages">
        {messages.map((message, index) => (
          <Message key={index} username={message.username} text={message.text} />
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <Input value="email" />
      <Icon value="icon1" />
      <Avatar connected={isConnected} size='medium' url='' />
      <Image url="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt="Image test" />
=======
  return (
    <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home socket={socket}/>}></Route>
            <Route path="/chat" element={<ChatPage socket={socket}/>}></Route>
          </Routes>
>>>>>>> c9a20ad297192d6750a8f26e502135319acf90c0
    </div>
    </BrowserRouter>
    
  );
}

export default App;
