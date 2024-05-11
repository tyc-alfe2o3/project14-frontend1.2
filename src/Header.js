import React from "react";
import { Layout, Input, Menu, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Header } = Layout;
const { Search } = Input;

const Navbar = () => {
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px", // 增加内边距以避免内容紧贴边缘
      }}
    >
      {/* 左侧布局：Logo和搜索框 */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar icon={<UserOutlined />} style={{ marginRight: 12 }} /> {/* Logo或Icon */}
        <Search
          placeholder="搜索..."
          style={{ maxWidth: 200 }}
          onSearch={(value) => console.log(value)}
        />
      </div>

      {/* 中间布局：菜单项 */}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }} // 调整行高以垂直居中菜单项
      >
        <Menu.Item key="1">主页</Menu.Item>
        <Menu.Item key="2">交流</Menu.Item>
        <Menu.Item key="3">日历</Menu.Item>
      </Menu>

      {/* 右侧布局：用户名和头像 */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ color: "rgba(255, 255, 255, 0.65)", marginRight: 8 }}>Username</span>
        <Avatar style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
      </div>
    </Header>
  );
};

export default Navbar;
