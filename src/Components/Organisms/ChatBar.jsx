import React, { useState, useEffect } from 'react';
import CurrentUser from '../Molecules/CurrentUser/CurrentUser';
import Navigation from '../Molecules/Navigation/Navigation';
import Search from '../Atoms/Search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserHistory from '../Molecules/UserHistory/UserHistory';

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

            <h2>Open Chat</h2>
            <div>
                <Search />
                <h4 className='chat__header'>ACTIVE USERS</h4>
                <div className='chat__users'>
                    {users.map(user => <p key={user.socketID}>{user.userName}</p>)}
                </div>
                <UserHistory />
            </div>
        </div>
    )
}

export default ChatBar