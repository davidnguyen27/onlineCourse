import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Header } from 'antd/es/layout/layout';

const App = () => {
  return (
    <Layout className="container">
      <Sider></Sider>
      <Layout>
        <Header></Header>
        <Content>abc</Content>
      </Layout>
    </Layout>
  );
};

export default App;
