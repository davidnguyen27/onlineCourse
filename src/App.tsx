import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Header } from 'antd/es/layout/layout';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Layout className="container">
      <Header className="flex items-center bg-white">
        <Navbar />
      </Header>
      <Layout>
        <Sider></Sider>
        <Layout>
          <Content>
            <h1 className="text-red-700">Hello</h1>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
