import React from 'react';
import { Layout, Menu } from 'antd';
import { DashboardOutlined, AppstoreOutlined, MessageOutlined, BellOutlined, FileDoneOutlined, DollarOutlined, SettingOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  return (
    <Sider collapsible>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<AppstoreOutlined />}>
          Courses
        </Menu.Item>
        <Menu.Item key="3" icon={<MessageOutlined />}>
          Messages
        </Menu.Item>
        <Menu.Item key="4" icon={<BellOutlined />}>
          Notifications
        </Menu.Item>
        <Menu.Item key="5" icon={<FileDoneOutlined />}>
          Certificates
        </Menu.Item>
        <Menu.Item key="6" icon={<DollarOutlined />}>
          Earnings
        </Menu.Item>
        <Menu.Item key="7" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;