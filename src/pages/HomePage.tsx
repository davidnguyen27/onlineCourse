import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import AppSider from '../components/AppSider';
import { useSider } from '../app/context/SiderProvider';
import Achievements from '../components/Achievements';
import CarouselInstructor from '../components/Carousel.instructor';
import CarouselReview from '../components/Carousel.review';
import CarouselCourse from '../components/Carousel.courses';
import CarouselSeller from '../components/Carousel.seller';

const HomePage: React.FC = () => {
  const { collapsed } = useSider();

  return (
    <Layout className="h-screen w-screen flex flex-col">
      <Header className="header">
        <AppHeader />
      </Header>
      <Layout className="flex flex-1">
        <Sider className="sider" collapsed={collapsed} collapsedWidth={0} trigger={null} width={220}>
          <AppSider className={`transition-all duration-75 ${collapsed ? 'w-0' : 'w-64'}`} />
        </Sider>
        <Layout className="flex flex-col flex-1">
          <Content className="flex-1 overflow-auto">
            <div className="p-8">
              <section>
                <div className="w-full flex justify-between mb-5">
                  <h1 className="font-bold text-xl">Newest Courses</h1>
                  <a href="#" className="hover:text-amber-600 font-light">
                    See all
                  </a>
                </div>
                <CarouselCourse />
              </section>
              <section className="mt-10">
                <div className="w-full flex justify-between mb-5">
                  <h1 className="font-bold text-xl">Best Seller</h1>
                  <a href="#" className="hover:text-amber-600 font-light">
                    See all
                  </a>
                </div>
                <CarouselSeller />
              </section>
              <Achievements />
              <section>
                <div className="w-full flex justify-between mb-5">
                  <h1 className="font-bold text-xl">Popular Instructors</h1>
                  <a href="#" className="hover:text-amber-600 font-light">
                    See all
                  </a>
                </div>
                <CarouselInstructor />
              </section>
              <section className="my-10">
                <h1 className="font-bold text-xl mb-5">What Our Student Have Today</h1>
                <CarouselReview />
              </section>
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

export default HomePage;
