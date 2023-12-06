import React from 'react';
import Avatar from '../../Atoms/Avatar/Avatar';
import "./CurrentUser.css";

const CurrentUser = ({ username, isConnected }) => {
    return (
        <div className='current--user flex gap-3'>
            <Avatar size='medium' url='https://cdn-icons-png.flaticon.com/256/25/25231.png' connected={isConnected} name='username' />
            <h2 className='title'>{username}</h2>
        </div>

    );
};

export default CurrentUser;