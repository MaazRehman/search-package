import React from "react";
import {Layout, Menu,} from "antd";
import Packages from "../package/Packages";
import "./layout.css";
import {FOOTER_STYLES, HEADER_STYLES, SIDEBAR_STYLES, MENU_ITEMS} from "./constants";


const { Header, Content, Footer, Sider } = Layout;

const AppLayout: React.FC = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        data-testid="sider"
        style={SIDEBAR_STYLES as React.CSSProperties}
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="demo-logo-vertical" />
        <Menu
            style={SIDEBAR_STYLES as React.CSSProperties}
            theme="light" mode="inline" defaultSelectedKeys={['0']} items={MENU_ITEMS}/>
      </Sider>
      <Layout>
        <Header
          data-testid="header"
          style={HEADER_STYLES as  React.CSSProperties}
        >
          <span>
            <img
              className="logo"
              src="https://bower.io/img/bower-logo.svg"
              alt="Bower logo"
            />
            <h3 className="page-title">Bower Search</h3>
          </span>
        </Header>
        <Content data-testid="content" style={{ margin: "24px 16px 0" }}>
          <Packages />
        </Content>
        <Footer
          data-testid="footer"
          style={FOOTER_STYLES as React.CSSProperties}
        >
          Bower Search 2.0 ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
