import React from 'react';
import Avatar from '../../Atoms/Avatar/Avatar';
import Text from '../../Atoms/Text/Text';
import "./UserHistory.css";

const UserHistory = ({ username, isConnected }) => {
    return (
        <div className='user gap-3'>
            <Avatar size='small' url='https://cdn-icons-png.flaticon.com/256/25/25231.png' connected={isConnected} />
            <div className='gap-1'>
                <p className='title'>{username}</p>
                <Text text='Dernier message' type="small" propriety='dark' />
            </div>
        </div>
    );
};

export default UserHistory;