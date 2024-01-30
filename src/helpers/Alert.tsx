import React from 'react';
import { Alert, Space } from 'antd';


interface NotificationProps {
    type: string;
    description: string;
    title: string;
}

const Notification: React.FC<NotificationProps> = (props: any) => {
    const { type, description, title } = props;


    return (
        <Space direction="vertical" style={{ width: '100%' }}>
            <Alert
                message={title}
                description={description}
                type={type}
                showIcon
            />
        </Space>
    )
};

export default Notification;