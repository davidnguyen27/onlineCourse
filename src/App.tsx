import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Navbar from './components/Navbar';
import AppFooter from './components/AppFooter';
import AppSider from './components/AppSider';

const App = () => {
  return (
    <Layout className="h-screen w-screen flex flex-col">
      <Header className="header">
        <Navbar />
      </Header>
      <Layout className="flex flex-1">
        <Sider className="sider">
          <AppSider />
        </Sider>
        <Layout className="flex flex-col flex-1">
          <Content className="flex-1">
            <h1 className="text-red-700">Content</h1>
          </Content>
          <Footer className="footer">
            <AppFooter />
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;

