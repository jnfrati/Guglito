import React, { useState } from "react";
import "./App.css";
import { Layout, Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Edit from "./components/Edit";
import CreateNew from "./components/CreateNew";
import Show from "./components/Show";
import PrivateRoute from "./Auth/privateRoutes";
import Auth from "./Auth/index";
import { ProvideAuth } from "./Auth/auth.provider";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => setCollapsed(collapsed);

  return (
    <Router basename={"/"}>
      <ProvideAuth>
        <Layout style={{ height: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.ItemGroup key="2">
                <Menu.Item key="setting:1">
                  {" "}
                  <HomeOutlined /> <Link to={"/"}>Home</Link>
                </Menu.Item>
                <Menu.Item key="setting:2">
                  <Link to={"/create-new"}>create</Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </Menu>
          </Sider>
          <Layout>
            <Header />

            <Content>
              <div>
                <Route exact path="/">
                  {" "}
                  Hola mundo
                </Route>
                <Route path="/edit/:id" component={Edit} />
                <PrivateRoute
                  redirectRoute={"/auth"}
                  path="/create-new"
                  component={CreateNew}
                />
                <Route path="/show" component={Show} />
                <Route path="/auth">
                  <Auth basename={"/auth"} />
                </Route>
                <Route path="/login">
                  <Redirect to="/auth/login"></Redirect>
                </Route>
              </div>
            </Content>
            <Footer></Footer>
          </Layout>
        </Layout>
      </ProvideAuth>
    </Router>
  );
};

export default App;
