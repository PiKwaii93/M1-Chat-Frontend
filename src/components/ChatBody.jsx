import React from 'react';
import { useNavigate } from "react-router-dom";
import Avatar from './Atoms/Avatar/Avatar';
import State from './Atoms/State';

const ChatBody = ({ messages, typingStatus, lastMessageRef }) => {
  const navigate = useNavigate()


  const handleLeaveChat = () => {
    localStorage.removeItem("userName")
    navigate("/")
    window.location.reload()
  }

  const isConnected = true;

  return (
    <>
      <header className='chat__mainHeader'>
        <div>
          <Avatar size='small' url='https://cdn-icons-png.flaticon.com/256/25/25231.png' connected={isConnected} />
          <div>
            <p>username</p>
            <State value={true} />
          </div>

        </div>

        <button className='leaveChat__btn' onClick={handleLeaveChat}>LEAVE CHAT</button>
      </header>


      <div className='message__container'>
        {messages.map(message => (
          message.name === localStorage.getItem("userName") ? (
            <div className="message__chats" key={message.id}>
              <p className='sender__name'>You</p>
              <div className='message__sender'>
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className='message__recipient'>
                <p>{message.text}</p>
              </div>
            </div>
          )
        ))}

        <div className='message__status'>
          <p>{typingStatus}</p>
        </div>
        <div ref={lastMessageRef} />
      </div>
    </>
  )
}

export default ChatBody