import React from 'react';
import { Layout, Menu, theme } from 'antd';
const { Header } = Layout;
const HeaderCM = (props: any) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                color: 'white',
            }}
        >
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
            // label={props.title}
            />
            {props.title}
        </Header>

    );
};
export default HeaderCM;