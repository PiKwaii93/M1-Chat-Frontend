import React, { useState, useEffect } from 'react';
import Avatar from '../Atoms/Avatar';
import Icon from '../Atoms/Icon';
// import Search from '../Atoms/Search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChatBar = ({ socket }) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        socket.on("newUserResponse", data => setUsers(data))
    }, [socket, users])

    const isConnected = true;
    const username = 'Gérard MANVUSSA';

    return (
        <div className='chat__sidebar'>
            <div className='flex gap-3 ai-center'>
                <Avatar size='medium' url='https://cdn-icons-png.flaticon.com/256/25/25231.png' connected={isConnected} name='username' />
                <h2 className='title'>{username}</h2>
            </div>

            <div className='w-100'>
                <Icon value="SmsIcon" />
                <Icon value="SearchIcon" />
            </div>

            <h2>Open Chat</h2>
            <div>
                {/* <Search /> */}
                <h4 className='chat__header'>ACTIVE USERS</h4>
                <div className='chat__users'>
                    {users.map(user => <p key={user.socketID}>{user.userName}</p>)}
                </div>
            </div>
        </div>
    )
}

export default ChatBar