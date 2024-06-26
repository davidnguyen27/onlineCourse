import { useNavigate } from 'react-router-dom';
import { useSider } from '../app/context/SiderProvider';

const AppHeader: React.FC = () => {
  const { toggleSider } = useSider();

  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper-50">
        <div className="styles-x-axis">
          <div className="menu-bar" onClick={toggleSider}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="logo-box">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/FPT_Education_logo.svg/2560px-FPT_Education_logo.svg.png"
              alt="FPT Education"
            />
          </div>
          <div className="styles-x-axis search-box">
            <input
              style={{ width: '100%' }}
              type="text"
              placeholder="Search for courses, tutorials..."
              className="search-item"
            />
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </div>
        </div>
      </div>
      <div className="styles-x-axis justify-end w-1/2">
        <div className="cart-styles">
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <button className="sign-in-button" onClick={() => navigate('/sign-in')}>
          Sign in
        </button>
        <button className="sign-up-button" onClick={() => navigate('/sign-up')}>
          Sign up
        </button>
      </div>
    </>
  );
};

export default AppHeader;
