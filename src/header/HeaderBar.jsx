import React from "react";
import App from "../App.js";

import "./headerbar.css";

import { useState } from "react";
import { Layout, Menu, theme } from "antd";

import HeaderItems from "./items/HeaderItems.tsx";

import menuItems from "./items/MenuItems.tsx";

const { Header, Sider, Content } = Layout;

export default function HeaderBar() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const itemHoverStyle = {
    background: "black",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  };

  return (
    <>
      <Layout>
        <Sider
          style={{
            backgroundColor: "black",
          }}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="demo-logo-vertical" />
          <Menu
            style={{
              background: "black",
            }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
          >
            {menuItems.map((item) => (
              <Menu.Item
                key={item.key}
                label={item.label}
                icon={item.icon}
                style={itemHoverStyle}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <HeaderItems setCollapsed={setCollapsed} collapsed={collapsed} />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: 5,
            }}
          >
            <App />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
