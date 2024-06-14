import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const SiderInstructor: React.FC<{ className?: string }> = () => {
  const navigate = useNavigate();

  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        className="bg-slate-200"
      >
        <Menu.Item
          className="hover:rounded-none hover:bg-amber-500 hover:text-black"
          key="1"
          icon={<i className="fa-solid fa-table-columns"></i>}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          className="hover:rounded-none hover:bg-amber-500 hover:text-black"
          key="2"
          icon={<i className="fa-solid fa-chart-line"></i>}
        >
          Analytics
        </Menu.Item>
        <Menu.Item
          className="hover:rounded-none hover:bg-amber-500 hover:text-black"
          key="3"
          icon={<i className="fa-solid fa-layer-group"></i>}
        >
          Categories
        </Menu.Item>
        <Menu.Item
          className="hover:rounded-none hover:bg-amber-500 hover:text-black"
          key="4"
          icon={<i className="fa-solid fa-user"></i>}
          onClick={() => navigate("/user-management")}
        >
          User
        </Menu.Item>
        <Menu.Item
          className="hover:rounded-none hover:bg-amber-500 hover:text-black"
          key="5"
          icon={<i className="fa-solid fa-gear"></i>}
        >
          Setting
        </Menu.Item>
      </Menu>
    </>
  );
};

export default SiderInstructor;
