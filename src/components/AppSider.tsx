import { Menu } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';

const AppSider: React.FC<{ className?: string }> = () => {
  return (
    <>
      <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} className="bg-slate-200">
        <Menu.Item
          className="hover:bg-amber-500 hover:rounded-none hover:text-black"
          key="1"
          icon={<i className="fa-solid fa-house"></i>}
        >
          Home
        </Menu.Item>
        <Menu.Item
          className="hover:bg-amber-500 hover:rounded-none hover:text-black"
          key="2"
          icon={<i className="fa-solid fa-address-card"></i>}
        >
          About
        </Menu.Item>
        <SubMenu key="sub1" icon={<i className="fa-solid fa-layer-group"></i>} title="Categories">
          <Menu.Item className="hover:bg-amber-500 hover:rounded-none hover:text-black" key="3">
            Web Development
          </Menu.Item>
          <Menu.Item className="hover:bg-amber-500 hover:rounded-none hover:text-black" key="4">
            Data & Analytics
          </Menu.Item>
          <Menu.Item className="hover:bg-amber-500 hover:rounded-none hover:text-black" key="5">
            Information Technology
          </Menu.Item>
          <Menu.Item className="hover:bg-amber-500 hover:rounded-none hover:text-black" key="6">
            Marketing
          </Menu.Item>
          <Menu.Item className="hover:bg-amber-500 hover:rounded-none hover:text-black" key="7">
            Office productivity
          </Menu.Item>
          <Menu.Item className="hover:bg-amber-500 hover:rounded-none hover:text-black" key="8">
            Business
          </Menu.Item>
        </SubMenu>
        <Menu.Item
          className="hover:bg-amber-500 hover:rounded-none hover:text-black"
          key="9"
          icon={<i className="fa-solid fa-gear"></i>}
        >
          Setting
        </Menu.Item>
        <Menu.Item
          className="hover:bg-amber-500"
          hover:rounded-none
          hover:text-black
          key="10"
          icon={<i className="fa-solid fa-circle-question"></i>}
        >
          Help
        </Menu.Item>
        <Menu.Item
          className="hover:bg-amber-500 hover:rounded-none hover:text-black"
          key="11"
          icon={<i className="fa-solid fa-flag"></i>}
        >
          Report
        </Menu.Item>
      </Menu>
    </>
  );
};

export default AppSider;
