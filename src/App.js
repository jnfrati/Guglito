import React, {useState} from 'react';
import './App.css';
import {Layout, Menu} from "antd";
import {HomeOutlined} from '@ant-design/icons';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Edit from "./components/Edit";
import CreateNew from "./components/CreateNew";
import Show from "./components/Show";
import Login from "./Auth/Login";
import Register from "./Auth/Register";


const {Header, Content, Footer, Sider} = Layout;


const App = () => {
    const [collapsed, setCollapsed] = useState(false)
    const onCollapse = (collapsed) => setCollapsed(collapsed);

    return (
        <Router>
        <Layout style={{height: '100vh'}}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={onCollapse}>
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.ItemGroup key="2">
                        <Menu.Item key="setting:1"> <HomeOutlined/> <Link to={'/'}>Home</Link></Menu.Item>
                        <Menu.Item key="setting:2"> <Link to={'/create-new'}>Create</Link></Menu.Item>
                        <Menu.Item key="setting:3"></Menu.Item>
                    </Menu.ItemGroup>
                </Menu>
            </Sider>
            <Layout>
                <Header/>
                <Content>
                        <div>
                            <Route exact path='/'> Hola mundo</Route>
                            <Route path='/edit/:id' component={Edit}/>
                            <Route path='/create-new' component={CreateNew}/>
                            <Route path='/show' component={Show}/>
                            <Route path='/Login/' component={Login}/>
                            <Route path='/Register/' component={Register}/>
                        </div>
                </Content>
                <Footer></Footer>
            </Layout>
        </Layout>
        </Router>
    )
}

export default App;
