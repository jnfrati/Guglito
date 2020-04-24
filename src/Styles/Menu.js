import React, {useState} from 'react';
import './App.css';
import {Layout, Menu} from "antd";
import {HomeOutlined} from '@ant-design/icons';


const {Header, Content, Footer, Sider} = Layout;


const Nav = () => {
    const [collapsed, setCollapsed] = useState(false)
    const onCollapse = (collapsed) => setCollapsed(collapsed);

    return (
        <Layout style={{height: '100vh'}}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={onCollapse}>
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.ItemGroup key="2">
                        <Menu.Item key="setting:1"> <HomeOutlined/> Home</Menu.Item>
                        <Menu.Item key="setting:2"></Menu.Item>
                    </Menu.ItemGroup>
                </Menu>
            </Sider>
            <Layout>
                <Header/>
                <Content>
                </Content>
                <Footer></Footer>
            </Layout>
        </Layout>
    )
}

export default Nav;
