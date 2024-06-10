import { useSider } from '../../app/context/SiderProvider';
import { useNavigate } from 'react-router-dom';

const AppHeader: React.FC = () => {
  const { toggleSider } = useSider();

  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <>
      <div className="wrapper-50">
        <div className="styles-x-axis">
          <div className="menu-bar" onClick={toggleSider}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="logo-box">
            <img
              src="/logo/Fstudy123.png"
              alt="FPT Education"
            />
          </div>
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
        <button className="sign-in-button" onClick={() => navigate("/sign-in")}>
          Sign in
        </button>
        <button className="sign-up-button" onClick={() => navigate("/sign-up")}>
          Sign up
        </button>
      </div>
    </>
  );
};

export default AppHeader;
