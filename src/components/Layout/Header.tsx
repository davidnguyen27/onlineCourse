import React, { useState } from 'react';
import { Layout, Input, Avatar, Badge, Button, Modal, Form, Input as AntInput } from 'antd';
import { UserOutlined, BellOutlined, ShoppingCartOutlined, PlusOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

interface HeaderProps {
  onCourseCreate: (course: { title: string; category: string; publishDate: string }) => void;
}

const Header: React.FC<HeaderProps> = ({ onCourseCreate }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        form.resetFields();
        onCourseCreate(values);
        setIsModalVisible(false);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <AntHeader className="bg-white shadow-md flex justify-between items-center px-4">
      <div className="text-lg font-bold">Cursus</div>
      <Input.Search placeholder="Search for Tuts, Videos, Tutors, Tests, and more..." style={{ maxWidth: 400 }} />
      <div className="flex items-center space-x-4">
        <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>Create Course</Button>
        <Badge count={2}><ShoppingCartOutlined style={{ fontSize: '20px' }} /></Badge>
        <Badge count={3}><BellOutlined style={{ fontSize: '20px' }} /></Badge>
        <Avatar icon={<UserOutlined />} />
      </div>

      <Modal title="Create Course" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} layout="vertical">
          <Form.Item label="Course Title" name="title" rules={[{ required: true, message: 'Please input the course title!' }]}>
            <AntInput />
          </Form.Item>
          <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please input the category!' }]}>
            <AntInput />
          </Form.Item>
          <Form.Item label="Publish Date" name="publishDate" rules={[{ required: true, message: 'Please input the publish date!' }]}>
            <AntInput />
          </Form.Item>
        </Form>
      </Modal>
    </AntHeader>
  );
};

export default Header;
