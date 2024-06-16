import { useNavigate } from "react-router-dom";
import { useSider } from "../../app/context/SiderContext";
import { Dropdown, MenuProps, Space } from "antd";
import { useAuth } from "../../app/context/AuthContext";

const AppHeader: React.FC = () => {
  const { toggleSider } = useSider();
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // const handleMenuClick: MenuProps["onClick"] = (e) => {
  //   if (e.key === "0" && user) {
  //     // Assuming the user object has a role property
  //     if (user.role === "student") {
  //       navigate("/student-profile-page");
  //     } else if (user.role === "teacher") {
  //       navigate("/teacher-profile-page");
  //     } else if (user.role === "admin") {
  //       navigate("/admin-profile-page");
  //     }
  //   } else if (e.key === "2") {
  //     handleLogout();
  //   }
  // };

  const items: MenuProps["items"] = [
    {
      label: <a onClick={() => navigate("/student-profile-page")}>Profile</a>,
      key: "0",
    },
    {
      label: <a href="#">My course</a>,
      key: "1",
    },
    {
      label: <a onClick={handleLogout}>Logout</a>,
      key: "2",
    },
  ];

  return (
    <>
      <div className="wrapper-50">
        <div className="styles-x-axis">
          <div className="menu-bar" onClick={toggleSider}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <a href="/" className="logo-box">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/FPT_Education_logo.svg/2560px-FPT_Education_logo.svg.png"
              alt="FPT Education"
            />
          </a>
          <div className="styles-x-axis search-box">
            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="Search for courses, tutorials..."
              className="search-item"
            />
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </div>
        </div>
      </div>
      <div className="styles-x-axis w-1/2 justify-end">
        <div className="cart-styles" onClick={handleCartClick}>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        {user ? (
          <Dropdown menu={{ items }}>
            <a className="mr-9 flex" onClick={(e) => e.preventDefault()}>
              <Space>
                <img
                  src="https://i.pinimg.com/736x/18/2f/fe/182ffe44b2e0782e34370f6e21045825.jpg"
                  className="h-12 w-12 rounded-full"
                />
              </Space>
            </a>
          </Dropdown>
        ) : (
          <>
            <button
              className="sign-in-button"
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </button>
            <button
              className="sign-up-button"
              onClick={() => navigate("/sign-up")}
            >
              Sign up
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default AppHeader;
