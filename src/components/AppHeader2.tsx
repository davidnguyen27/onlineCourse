import { Avatar, Menu, Switch, Layout, Button, Dropdown } from 'antd';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { UserOutlined } from "@ant-design/icons";
const { Header } = Layout;


const AppHeader2: React.FC = () => {
    const navigate = useNavigate();
    const [nightMode, setNightMode] = useState(false);

    const userMenu = (
        <Menu>
          <Menu.Item key="user-info" disabled>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src="https://via.placeholder.com/40" /> {/* Replace with actual avatar URL */}
              <div style={{ marginLeft: 10 }}>
                <div><strong>John Doe</strong></div>
                <div>johndoe@example.com</div>
              </div>
            </div>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="view-profile" onClick={() => navigate('/profile')}>
            View Profile
          </Menu.Item>
          <Menu.Item key="toggle-night-mode">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Night Mode</span>
              <Switch checked={nightMode} onChange={() => setNightMode(!nightMode)} />
            </div>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="logout">
            Logout
          </Menu.Item>
        </Menu>
      );

  return (
<Header
        style={{
          background: nightMode ? '#1a1a1a' : "#e2e8f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <Button onClick={() => navigate("/")}>
          Back To Homepage
        </Button>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/FPT_Education_logo.svg/2560px-FPT_Education_logo.svg.png"
          alt="FPT Education"
          style={{ height: "40px", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <Dropdown overlay={userMenu} trigger={['click']}>
          <UserOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
        </Dropdown>
      </Header>  )
}

export default AppHeader2