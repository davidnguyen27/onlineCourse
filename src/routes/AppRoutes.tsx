import React from 'react';
import 'antd/dist/reset.css';
import './index.css';
import Cart from '../pages/Cart';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Cart />
    </div>
  );
};

export default App;
