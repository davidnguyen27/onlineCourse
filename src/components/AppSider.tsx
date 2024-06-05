const AppSider: React.FC<{ className?: string }> = () => {
  return (
    <>
      <div className="">
        <div className="sider-item active">
          <i className="fa-solid fa-house"></i>
          <span className="sider-text">Home</span>
        </div>
        <div className="sider-item">
          <i className="fa-solid fa-address-card"></i>
          <span className="sider-text">About</span>
        </div>
        <div className="sider-item">
          <i className="fa-solid fa-layer-group"></i>
          <span className="sider-text">Categories</span>
        </div>
        <div className="sider-item">
          <i className="fa-solid fa-gear"></i>
          <span className="sider-text">Setting</span>
        </div>
        <div className="sider-item">
          <i className="fa-solid fa-circle-question"></i>
          <span className="sider-text">Help</span>
        </div>
        <div className="sider-item">
          <i className="fa-solid fa-flag"></i>
          <span className="sider-text">Report</span>
        </div>
      </div>
    </>
  );
};

export default AppSider;
