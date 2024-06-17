import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import AppHeader from "../../components/Student/StudentHeader";
import AppFooter from "../../components/Layout/AppFooter";
import StudentSider from "../../components/Student/StudentSider";
import { useSider } from "../../app/context/SiderContext";
import { CarouselCourse, CarouselSeller } from "../../components";

const StudentHomePage: React.FC = () => {
  const { collapsed } = useSider();

  return (
    <Layout className="flex h-screen w-screen flex-col">
      <Header className="header">
        <AppHeader />
      </Header>
      <Layout className="flex flex-1 overflow-y-auto">
        <Sider
          className="sider"
          collapsed={collapsed}
          collapsedWidth={0}
          trigger={null}
          width={256}
        >
          <StudentSider
            className={`transition-all duration-75 ${collapsed ? "w-0" : "w-64"}`}
          />
        </Sider>
        <Layout className="flex flex-1 flex-col">
          <Content className="flex-1 overflow-auto">
          
            <div className="p-8">
              <section>
                <div className="mb-5 flex w-full justify-between">
                  <h1 className="text-xl font-bold">Recommended Courses</h1>
                  <a href="#" className="font-light hover:text-amber-600">
                    See all
                  </a>
                </div>
                <CarouselCourse />
              </section>
              <section className="mt-10">
                <div className="mb-5 flex w-full justify-between">
                  <h1 className="text-xl font-bold">In Progress</h1>
                  <a href="#" className="font-light hover:text-amber-600">
                    See all
                  </a>
                </div>
                <CarouselSeller />
              </section>
             
            </div>
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
