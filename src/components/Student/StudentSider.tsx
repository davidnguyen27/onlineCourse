import { Menu } from "antd";
import { Link } from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";

const StudentSider: React.FC<{ className?: string }> = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      className="bg-slate-200"
    >
      <Menu.Item
        className="hover:rounded-none hover:bg-amber-500 hover:text-black"
        key="1"
        icon={<Link to="/student-page"><i className="fa-solid fa-house"></i></Link>}
      >
        Home
      </Menu.Item>
      <Menu.Item
        className="hover:rounded-none hover:bg-amber-500 hover:text-black"
        key="2"
        icon={<Link to="/student-courses-page"><i className="fa-solid fa-address-card"></i></Link>}
      >
        My Courses
      </Menu.Item>
      <SubMenu
        key="sub1"
        icon={<i className="fa-solid fa-layer-group"></i>}
        title="Categories"
      >
        <Menu.Item
          className="hover:rounded-none hover:bg-amber-500 hover:text-black"
          key="3"
        >
          Web Development
        </Menu.Item>
        {/* Add other sub-menu items here */}
      </SubMenu>
      <Menu.Item
        className="hover:rounded-none hover:bg-amber-500 hover:text-black"
        key="9"
        icon={<Link to="/student-settings-page"><i className="fa-solid fa-gear"></i></Link>}
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
        className="hover:rounded-none hover:bg-amber-500 hover:text-black"
        key="11"
        icon={<Link to="/student-report-page"><i className="fa-solid fa-flag"></i></Link>}
      >
        Report
      </Menu.Item>
    </Menu>
  );
};

export default StudentSider;
