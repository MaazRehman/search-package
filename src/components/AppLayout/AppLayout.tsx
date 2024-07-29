import React from 'react';
import { Layout, Menu } from 'antd';
import Packages from "../package/Packages";
import './layout.css'
import { colorBgContainer } from "./constants";

const { Header, Content, Footer, Sider } = Layout;

const AppLayout: React.FC = () => {
    return (
        <Layout style={{ height: '100vh' }}>
            <Sider
                data-testid="sider"
                style={{ backgroundColor: '#2188b6' }}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[]} items={[]} />
            </Sider>
            <Layout>
                <Header data-testid="header" style={{ padding: 0, background: colorBgContainer, textAlign: 'center' }}>
                    <span>
                        <img className="logo" src="https://bower.io/img/bower-logo.svg" alt="Bower logo" />
                        <h3 className="page-title">Bower Search</h3>
                    </span>
                </Header>
                <Content data-testid="content" style={{ margin: '24px 16px 0' }}>
                    <Packages />
                </Content>
                <Footer data-testid="footer" style={{ textAlign: 'center', height: '100px', lineHeight: '100px', marginBottom: '0' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
