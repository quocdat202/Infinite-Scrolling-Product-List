import { Layout, theme } from 'antd';
import React from 'react';

const { Footer } = Layout;



const FooterCM: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>

    );
};

export default FooterCM;