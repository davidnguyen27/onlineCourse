import React from "react";
import "antd/dist/reset.css";
import "./index.css";
import LoginPage from "../pages/LoginPage";

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <LoginPage />
    </div>
  );
};

export default App;
