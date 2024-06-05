import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import AppSider from '../components/AppSider';
import { useSider } from '../app/context/SiderProvider';
import CourseHorizontal from '../components/CourseHorizontal';

const HomePage: React.FC = () => {
  const { collapsed } = useSider();

  return (
    <Layout className="h-screen w-screen flex flex-col">
      <Header className="header">
        <AppHeader />
      </Header>
      <Layout className="flex flex-1">
        <Sider className="sider" collapsed={collapsed} collapsedWidth={0} trigger={null} width={256}>
          <AppSider className={`transition-all duration-75 ${collapsed ? 'w-0' : 'w-64'}`} />
        </Sider>
        <Layout className="flex flex-col flex-1">
          <Content className="flex-1 p-6 overflow-auto">
            <CourseHorizontal />
          </Content>
          <Footer className="footer">
            <AppFooter />
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default HomePage;
