import React from 'react';
import Avatar from '../../Atoms/Avatar/Avatar';
import Text from '../../Atoms/Text/Text';
import Icon from '../../Atoms/Icon/Icon';
import "./UserHistory.css";

const UserHistory = ({ username, isConnected }) => {
    return (
        <div className='flex flex-row ai-center gap-3'>
            <div className='user flex flex-row gap-3 ai-center'>
                <Avatar size='small' url='https://cdn-icons-png.flaticon.com/256/25/25231.png' connected={isConnected} />
                <div className='gap-1'>
                    <Text type='medium' propriety='bold' text={username} />
                    <Text text='Dernier message' type="small" propriety='dark' />
                </div>
            </div>
            <div>
                <Icon value="MoreVertIcon" />
            </div>
        </div>
    );
};

export default UserHistory;