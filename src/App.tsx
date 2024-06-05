import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Navbar from './components/Navbar';
import AppFooter from './components/AppFooter';
import AppSider from './components/AppSider';
import Cart from './pages/Cart';
import CheckoutPage from './pages/CheckOut';

const App = () => {
  return (
    <Router>
      <Layout className="h-screen w-screen flex flex-col">
        <Header className="header">
          <Navbar />
        </Header>
        <Layout className="flex flex-1">
          <Sider className="sider">
            <AppSider />
          </Sider>
          <Layout className="flex flex-col flex-1">
            <Content className="flex-1 p-4">
              <Routes>
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckoutPage/>} />
              </Routes>
            </Content>
            <Footer className="footer">
              <AppFooter />
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
