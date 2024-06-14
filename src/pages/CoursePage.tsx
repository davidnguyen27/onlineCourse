import React, { useState } from 'react';
import { Layout, Table, Button } from 'antd';
import Header from '../components/Layout/Header';
import Sider from '../components/Layout/Sidebar';
import Footer from '../components/Layout/Footer';

const { Content } = Layout;

const CoursePage: React.FC = () => {
  const [courses, setCourses] = useState([
    { key: '1', itemNo: 'IT-001', title: 'Course Title Here', publishDate: '06 April 2020 | 08:31', sales: 15, parts: 5, category: 'Web Development', status: 'Active' },
    { key: '2', itemNo: 'IT-002', title: 'Course Title Here', publishDate: '05 April 2020 | 05:15', sales: 30, parts: 3, category: 'Graphic Design', status: 'Active' },
    { key: '3', itemNo: 'IT-003', title: 'Course Title Here', publishDate: '03 April 2020 | 01:30', sales: 14, parts: 5, category: 'Bootstrap', status: 'Active' },
    { key: '4', itemNo: 'IT-004', title: 'Course Title Here', publishDate: '02 April 2020 | 05:15', sales: 110, parts: 9, category: 'Game Development', status: 'Active' },
    { key: '5', itemNo: 'IT-002', title: 'Course Title Here', publishDate: '28 March 2020 | 05:15', sales: 185, parts: 10, category: 'C++', status: 'Active' }
  ]);

  const [purchases, setPurchases] = useState([
    { key: '1', itemNo: '001', title: 'Course Title Here', vendor: 'Zoena Singh', category: 'Web Development', deliveryType: 'Download', price: '$15', purchaseDate: '25 March 2020' },
    { key: '2', itemNo: '002', title: 'Course Title Here', vendor: 'Rock William', category: 'C++', deliveryType: 'Download', price: '$20', purchaseDate: '20 March 2020' }
  ]);

  const [activeTab, setActiveTab] = useState('myCourses');

  const handleCourseCreate = (course: { title: string; category: string; publishDate: string }) => {
    const newCourse = {
      key: (courses.length + 1).toString(),
      itemNo: `IT-00${courses.length + 1}`,
      ...course,
      sales: 0,
      parts: 0,
      status: 'Active'
    };
    setCourses([...courses, newCourse]);
  };

  const courseColumns = [
    { title: 'Item No.', dataIndex: 'itemNo', key: 'itemNo' },
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Publish Date', dataIndex: 'publishDate', key: 'publishDate' },
    { title: 'Sales', dataIndex: 'sales', key: 'sales' },
    { title: 'Parts', dataIndex: 'parts', key: 'parts' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <>
          <Button type="link">Edit</Button>
          <Button type="link">Delete</Button>
        </>
      ),
    },
  ];

  const purchaseColumns = [
    { title: 'Item No.', dataIndex: 'itemNo', key: 'itemNo' },
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Vendor', dataIndex: 'vendor', key: 'vendor', render: (text: string) => <a href="#">{text}</a> },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Delivery Type', dataIndex: 'deliveryType', key: 'deliveryType', render: (text: string) => <span className="text-red-500">{text}</span> },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Purchase Date', dataIndex: 'purchaseDate', key: 'purchaseDate' },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <div className="flex space-x-2">
          <Button type="link">Download</Button>
          <Button type="link">Delete</Button>
          <Button type="link">Print</Button>
        </div>
      ),
    },
  ];

  const renderPromotionsContent = () => {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4">
        <img src="https://images8.alphacoders.com/129/1297077.jpg" alt="Promotion Image" className="mb-4" />
        <h2 className="text-xl font-semibold mb-2">Baby promotion plan is activated!</h2>
        <p className="text-center mb-4">By activating promotion plans you can improve course views and sales.</p>
        <Button type="primary" className="bg-red-500 hover:bg-red-600">Change New Plan</Button>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'myCourses':
        return <Table dataSource={courses} columns={courseColumns} />;
      case 'myPurchases':
        return <Table dataSource={purchases} columns={purchaseColumns} />;
      case 'upcomingCourses':
        return <div>Upcoming Courses content goes here</div>;
      case 'discounts':
        return <div>Discounts content goes here</div>;
      case 'promotions':
        return renderPromotionsContent();
      default:
        return <Table dataSource={courses} columns={courseColumns} />;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider width={200} className="site-layout-background">
        <Sider />
      </Layout.Sider>
      <Layout>
        <Layout.Header className="site-layout-background" style={{ padding: 0 }}>
          <Header onCourseCreate={handleCourseCreate} />
        </Layout.Header>
        <Content style={{ margin: '16px 16px', background: '#fff' }}>
          <div className="mb-4 flex space-x-4">
            <Button type={activeTab === 'myCourses' ? 'primary' : 'default'} onClick={() => setActiveTab('myCourses')}>My Courses</Button>
            <Button type={activeTab === 'myPurchases' ? 'primary' : 'default'} onClick={() => setActiveTab('myPurchases')}>My Purchases</Button>
            <Button type={activeTab === 'upcomingCourses' ? 'primary' : 'default'} onClick={() => setActiveTab('upcomingCourses')}>Upcoming Courses</Button>
            <Button type={activeTab === 'discounts' ? 'primary' : 'default'} onClick={() => setActiveTab('discounts')}>Discounts</Button>
            <Button type={activeTab === 'promotions' ? 'primary' : 'default'} onClick={() => setActiveTab('promotions')}>Promotions</Button>
          </div>
          {renderContent()}
        </Content>
        <Layout.Footer style={{ padding: 0 }}>
          <Footer />
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};

export default CoursePage;
