import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      © 2024 Cursus. All Rights Reserved.
    </Footer>
  );
};

export default AppFooter;
