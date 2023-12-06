import React, { useState, useEffect } from 'react';
import Avatar from './Atoms/Avatar/Avatar';
import Icon from './Atoms/Icon';
import Search from './Atoms/Search/Search';


const ChatBar = ({ socket }) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        socket.on("newUserResponse", data => setUsers(data))
    }, [socket, users])

    return (
        <div className='chat__sidebar'>
            <div className='flex'>
                <Avatar size='medium' url='https://cdn-icons-png.flaticon.com/256/25/25231.png' connected='true' name='username' />
                <h2>username</h2>
            </div>

            <div>
                <Icon value="SmsIcon" />
                <Icon value="SearchIcon" />
            </div>

            <h2>Open Chat</h2>
            <div>
                <Search />
                <h4 className='chat__header'>ACTIVE USERS</h4>
                <div className='chat__users'>
                    {users.map(user => <p key={user.socketID}>{user.userName}</p>)}
                </div>
            </div>
        </div>
    )
}

export default ChatBar