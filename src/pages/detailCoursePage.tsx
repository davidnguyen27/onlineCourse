import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import AppHeader from '../components/AppHeader';
import Sider from 'antd/es/layout/Sider';
import AppSider from '../components/AppSider';
import AppFooter from '../components/AppFooter';
import { useSider } from '../app/context/SiderProvider';
import DetailCourseContent from '../components/DetailCourseContent';

const DetailCoursePage: React.FC = () => {
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
          <Content className="flex-1 overflow-y-auto">
            <div className="p-4">
              <DetailCourseContent />
            </div>
            <Footer className="footer mt-auto">
              <AppFooter />
            </Footer>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DetailCoursePage;

