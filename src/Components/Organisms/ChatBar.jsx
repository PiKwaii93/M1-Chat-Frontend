import React, { useState, useEffect } from 'react';
import CurrentUser from '../Molecules/CurrentUser/CurrentUser';
import Navigation from '../Molecules/Navigation/Navigation';
import UserHistory from '../Molecules/UserHistory/UserHistory';
import UserAdd from '../Molecules/UserAdd/UserAdd';
import Search from '../Atoms/Search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatMessage from '../Molecules/ChatMessage/ChatMessage';


const ChatBar = ({ socket }) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        socket.on("newUserResponse", data => setUsers(data))
    }, [socket, users])

    const isConnected = true;
    const username = 'Gérard MANVUSSA';

    return (
        <div className='chat__sidebar'>

            <CurrentUser username={username} isConnected={isConnected} />

            <Navigation />

            <div>
                <Search />
                <div className='chat__users'>
                    {users.map(user => <p key={user.socketID}>{user.userName}</p>)}
                </div>
                <UserHistory username={username} isConnected={isConnected} />
                <UserAdd username={username} isConnected={isConnected} />
            </div>

            <ChatMessage user={username} message="Hello World !" isCurrent={false}/>

        </div>
    )
}

export default ChatBar