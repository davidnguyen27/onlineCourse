import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  const handleMenuClick = (key: string) => {
    navigate(`/${key}`);
  };

  return (
    <Layout>
      <Header className="bg-white shadow-md">
        <Menu mode="horizontal" defaultSelectedKeys={['about']} onClick={(e) => handleMenuClick(e.key)}>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="blog">Blog</Menu.Item>
          <Menu.Item key="company">Company</Menu.Item>
          <Menu.Item key="careers">Careers</Menu.Item>
          <Menu.Item key="press">Press</Menu.Item>
        </Menu>
      </Header>
      <Content className="px-8 py-16 bg-gray-50">
        <div className="text-center">
          <Title level={2}>Improving Lives Through Learning</Title>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-16">
          <div className="text-center">
            <div className="text-4xl">📱</div>
            <Title level={4}>Sơn Tùng MTP</Title>
            <Paragraph>Nguyễn Thanh Tùng (sinh ngày 5 tháng 7 năm 1994), thường được biết đến với nghệ danh Sơn Tùng M-TP, là một nam ca sĩ kiêm sáng tác nhạc, rapper, nhà sản xuất thu âm và diễn viên người Việt Nam. Sinh ra ở thành phố Thái Bình, Sơn Tùng thường đi hát ở Cung văn hoá thiếu nhi tỉnh Thái Bình và học chơi đàn organ từ nhỏ. Sau đó, Tùng cùng với các bạn trong lớp thành lập nên một nhóm nhạc, lấy tên là Over Band, bắt đầu sáng tác và đăng tải các bài hát của mình lên một trang web chuyên về lĩnh vực âm nhạc có tên là LadyKillah.</Paragraph>
          </div>
          <div className="text-center">
            <div className="text-4xl">🎓</div>
            <Title level={4}>Hải Tú</Title>
            <Paragraph>Hải Tú từng được biết đến là người mẫu ảnh đình đám Sài Thành, cô nàng còn được ưu ái đặt mệnh danh là nàng thơ khi sở hữu gương mặt đẹp thuần khiết, vừa mong manh lại quyến rũ. Tên tuổi của người đẹp 9x ngày càng phủ sóng rộng rãi hơn khi gia nhập công ty của nam ca sĩ đình đám Sơn Tùng M-TP. Gần đây, Hải Tú trở thành cái tên gây tranh cãi khi vướng vào lùm xùm chen chân vào mối tình giữa Sơn Tùng và Thiều Bảo Trâm.</Paragraph>
          </div>
          <div className="text-center">
            <div className="text-4xl">📜</div>
            <Title level={4}>Jack 5 củ</Title>
            <Paragraph>Jack - J97, tên thật là Trịnh Trần Phương Tuấn, sinh ngày 12 tháng 4 năm 1997 tại xã Ngãi Đăng, huyện Mỏ Cày Nam, tỉnh Bến Tre.[2] Anh là con của gia đình có cha làm nghề trồng dừa và chăn dê, còn mẹ kinh doanh quán trà sữa nhỏ; hai người sau đó đã ly hôn.</Paragraph>
          </div>
          <div className="text-center">
            <div className="text-4xl">🌍</div>
            <Title level={4}>Đom đóm</Title>
            <Paragraph>Đom đóm hay bọ phát sáng là những loài côn trùng cánh cứng nhỏ được gọi chung là họ Đom đóm (Lampyridae) có khả năng phát quang. Đom đóm là động vật tiêu biểu cho vùng ôn đới mặc dù phần lớn các loài sống ở vùng nhiệt và cận nhiệt đới (khoảng 2000 loài).Chúng là loài động vật ăn thịt nên ăn sâu bọ hoặc các loại ốc</Paragraph>
          </div>
        </div>
        <div className="my-16">
          <Title level={3}>Our Story</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur vel dolor id ultrices. Proin a magna at mi pretium pulvinar in eu enim. Nulla vel lacus lectus. Donec at venenatis nisl, id placerat orci.
          </Paragraph>
        </div>

        <section className="text-center py-12 bg-gray-100">
    <h2 className="text-4xl font-bold">Our Global Reach</h2>
    <p className="text-gray-600 mt-4">Cursus is the leading global marketplace for teaching and learning, connecting millions of students to the skills they need to succeed.</p>
    <div className="flex justify-center mt-8 space-x-8">
      <div>
        <h3 className="text-2xl font-bold">25k</h3>
        <p>Instructors</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">95k</h3>
        <p>Courses</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">40M</h3>
        <p>Course enrollments</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">50+</h3>
        <p>Languages</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">595+</h3>
        <p>Membership Partners</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">295</h3>
        <p>Countries</p>
      </div>
    </div>
  </section>
  
      </Content>
    </Layout>
  );
};

export default AboutPage;
