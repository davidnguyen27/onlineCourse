import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import AppSider from '../components/AppSider';
import { useSider } from '../app/context/SiderProvider';
import CourseBox from '../components/CourseBox';
import InstructorChannel from '../components/InstructorChannel'
import CourseSubTab from '../components/CourseSubTab'
import { useState } from 'react';
const HomePage: React.FC = () => {
  const { collapsed } = useSider();
  const [activeTab, setActiveTab] = useState('about');
  return (
    <Layout className="h-screen w-screen flex flex-col overflow-y-auto">
      <Header className="header">
        <AppHeader />
      </Header>
      <Layout className="flex flex-1">
        <Sider className="sider" collapsed={collapsed} collapsedWidth={0} trigger={null} width={256}>
          <AppSider className={`transition-all duration-75 ${collapsed ? 'w-0' : 'w-64'}`} />
        </Sider>
        <Layout className="flex flex-col flex-1">
          <Content className="flex-1 overflow-y-auto">
            <CourseBox
              courseData={{
                title: "Course Title",
                description: "Course Description"
              }}
            />
          <InstructorChannel
            instructor="Trần Khánh Vinh"
            students={1000}
            likes={800}
            dislikes={200}
            shares={150}
          />
          <CourseSubTab 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              courseData={{
                content: ['Course Content 1', 'Course Content 2']
              }}
              />
              <Footer className="footer">
            <AppFooter />
          </Footer>
          </Content>
          
        </Layout>
      </Layout>
    </Layout>
  );
};

export default HomePage;
