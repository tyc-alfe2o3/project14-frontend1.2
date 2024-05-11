import React, { useState } from 'react';
import { Layout, Input, Menu, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {Link, useLocation} from 'react-router-dom';
const { Header } = Layout;
const { Search } = Input;

const Navbar = () => {
    // const [selectedKey, setSelectedKey] = useState('1');
    const handleClick = (e) => {
        setSelectedKey(e.key);
    };

    const location = useLocation();
    const [selectedKey, setSelectedKey] = useState(getSelectedKey());

    function getSelectedKey() {
        const path = location.pathname;
        switch (path) {
            case '/home':
                return '1';
            case '/communicate':
                return '2';
            case '/calendar':
                return '3';
            default:
                return '1';
        }
    }
  return (
    <Header
      style={{
          color: "#130644",
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
        // defaultSelectedKeys={["1"]}
        selectedKeys={[selectedKey]}
        onClick={handleClick}
        style={{ lineHeight: "64px" }} // 调整行高以垂直居中菜单项
      >
          <Menu.Item key="1"><Link to="/home">主页</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/communicate">交流</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/calendar">日历</Link></Menu.Item>
      </Menu>

        {/* 右侧布局：用户名和头像 */}
        <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: "rgba(255, 255, 255, 0.65)", marginRight: 8 }}>Username</span>
            <Link to="/personal-info">
                <Avatar style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
            </Link>
        </div>
    </Header>
  );
};

export default Navbar;
