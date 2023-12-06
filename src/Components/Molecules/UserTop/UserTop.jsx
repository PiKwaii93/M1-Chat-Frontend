import React from 'react';
import Avatar from '../../Atoms/Avatar/Avatar';
import State from '../../Atoms/State/State';
import "./UserTop.css";

const UserTop = ({ username, isConnected }) => {
    return (
        <header className='usertop gap-3'>
            <Avatar size='small' url='https://cdn-icons-png.flaticon.com/256/25/25231.png' connected={isConnected} />
            <div className='gap-1'>
                <p className='title'>{username}</p>
                <State value={true} />
            </div>
        </header>
    );
};

export default UserTop;