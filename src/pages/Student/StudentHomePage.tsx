import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import StudentHeader from '../../components/Student/StudentHeader';
import AppFooter from '../../components/Layout/AppFooter';
import AppSider from '../../components/Layout/AppSider';
import { useSider } from '../../app/context/SiderProvider';


const StudentHomePage: React.FC = () => {
  const { collapsed } = useSider();

  return (
    <Layout className="h-screen w-screen flex flex-col">
      <Header className="header">
        <StudentHeader />
      </Header>
      <Layout className="flex flex-1 overflow-y-auto">
        <Sider
          className="sider"
          collapsed={collapsed}
          collapsedWidth={0}
          trigger={null}
          width={256}
        >
          <AppSider className={`transition-all duration-75 ${collapsed ? 'w-0' : 'w-64'}`} />
        </Sider>
        <Layout className="flex flex-col flex-1">
          <Content className="flex-1 overflow-y-auto">
            
            <Footer className="footer">
            <AppFooter />
          </Footer>
          </Content>
          
        </Layout>
      </Layout>
    </Layout>
  );
};

export default StudentHomePage;