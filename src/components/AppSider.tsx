import React, { useState } from "react";
import { Menu, Input } from "antd";
import { useNavigate } from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";

const AppSider: React.FC<{ className?: string }> = () => {
  const navigate = useNavigate();
  const [, setSearchQuery] = useState('');

  const onSearch = (value: string) => {
    setSearchQuery(value);
    navigate(`/search?q=${value}`);
  };

  return (
    <div className="sider-container">
      <Input.Search
        placeholder="Search..."
        onSearch={onSearch}
        style={{ marginBottom: 16 }}
      />
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        className="bg-slate-200"
      >
        <Menu.Item
          className="hover:rounded-none hover:bg-amber-500 hover:text-black"
          key="1"
          icon={<i className="fa-solid fa-house"></i>}
          onClick={() => navigate('/')}
        >
          Home
        </Menu.Item>
        <Menu.Item
          className="hover:rounded-none hover:bg-amber-500 hover:text-black"
          key="2"
          icon={<i className="fa-solid fa-magnifying-glass"></i>}
          onClick={() => navigate('/search')}
        >
          Search
        </Menu.Item>
        <Menu.Item
          className="hover:rounded-none hover:bg-amber-500 hover:text-black"
          key="3"
          icon={<i className="fa-solid fa-address-card"></i>}
          onClick={() => navigate('/about')}
        >
          About
        </Menu.Item>
        <Menu.Item
          className="hover:rounded-none hover:bg-amber-500 hover:text-black"
          key="4"
          icon={<i className="fa fa-snowflake-o"></i>}
          onClick={() => navigate('/careers')}
        >
          Careers
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={<i className="fa-solid fa-layer-group"></i>}
          title="Categories"
        >
          <Menu.Item
            className="hover:rounded-none hover:bg-amber-500 hover:text-black"
            key="web-development"
            onClick={() => navigate('/category/web-development')}
          >
            Web Development
          </Menu.Item>
          <Menu.Item
            className="hover:rounded-none hover:bg-amber-500 hover:text-black"
            key="data-analytics"
            onClick={() => navigate('/category/data-analytics')}
          >
            Data & Analytics
          </Menu.Item>
          <Menu.Item
            className="hover:rounded-none hover:bg-amber-500 hover:text-black"
            key="information-technology"
            onClick={() => navigate('/category/information-technology')}
          >
            Information Technology
          </Menu.Item>
          <Menu.Item
            className="hover:rounded-none hover:bg-amber-500 hover:text-black"
            key="marketing"
            onClick={() => navigate('/category/marketing')}
          >
            Marketing
          </Menu.Item>
          <Menu.Item
            className="hover:rounded-none hover:bg-amber-500 hover:text-black"
            key="office-productivity"
            onClick={() => navigate('/category/office-productivity')}
          >
            Office Productivity
          </Menu.Item>
          <Menu.Item
            className="hover:rounded-none hover:bg-amber-500 hover:text-black"
            key="business"
            onClick={() => navigate('/category/business')}
          >
            Business
          </Menu.Item>
        </SubMenu>
        <Menu.Item
          className="hover:rounded-none hover:bg-amber-500 hover:text-black"
          key="9"
          icon={<i className="fa-solid fa-gear"></i>}
          onClick={() => navigate('/settings')}
        >
          Setting
        </Menu.Item>
        <Menu.Item
          className="hover:rounded-none hover:bg-amber-500 hover:text-black"
          key="10"
          icon={<i className="fa-solid fa-circle-question"></i>}
          onClick={() => navigate('/help')}
        >
          Help
        </Menu.Item>
        <Menu.Item
          className="hover:rounded-none hover:bg-amber-500 hover:text-black"
          key="11"
          icon={<i className="fa-solid fa-flag"></i>}
          onClick={() => navigate('/report')}
        >
          Report
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default AppSider;
