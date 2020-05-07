import React, {useState} from 'react';
import './App.css';
import {Layout, Menu} from 'antd';
import {HomeOutlined} from '@ant-design/icons';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Edit from './components/Edit';
import CreateNew from './components/CreateNew';
import Show from './components/Show';
import Login from './Auth/Login/index';
import useAuthState from './Auth/auth.hooks';
import PrivateRoute from './Auth/privateRoutes';
import Auth from './Auth/index';
import { ProvideAuth } from './Auth/auth.provider';




const {Header, Content, Footer, Sider} = Layout;


const App = () => {
    const [collapsed, setCollapsed] = useState(false)
    const onCollapse = (collapsed) => setCollapsed(collapsed);

    const User = useAuthState();
    console.log(User)

    return (
        <Router basename={'/'}>
            <ProvideAuth>
        <Layout style={{height: '100vh'}}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={onCollapse}>
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.ItemGroup key="2">
                        <Menu.Item key="setting:1"> <HomeOutlined/> <Link to={'/'}>Home</Link></Menu.Item>
                        <Menu.Item key="setting:2"><Link to={'/create-new'}>create</Link></Menu.Item>
                    </Menu.ItemGroup>
                </Menu>
            </Sider>
            <Layout>
                <Header/>
                
                {!User.isLoggedIn && <Auth basename={'/auth'}/>}

                <Content>
                        <div>
                            <Route exact path='/'> Hola mundo</Route>
                            <Route path='/edit/:id' component={Edit}/>
                            <PrivateRoute path='/create-new' component={CreateNew}/>
                            <Route path='/show' component={Show}/>
                            <Route path='/login' component={Login}/>
                        </div>
                </Content>
                <Footer></Footer>
            </Layout>
        </Layout>
        </ProvideAuth>
 </Router>
    )
}

export default App;
