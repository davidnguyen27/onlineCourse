import React from 'react';
import { Table, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const dataSource = [
  {
    key: '1',
    itemNo: 'IT-001',
    title: 'Course Title Here',
    publishDate: '06 April 2020 | 08:31',
    sales: 15,
    parts: 5,
    category: 'Web Development',
    status: 'Active',
  },
  {
    key: '2',
    itemNo: 'IT-002',
    title: 'Course Title Here',
    publishDate: '05 April 2020 | 05:15',
    sales: 30,
    parts: 3,
    category: 'Graphic Design',
    status: 'Active',
  },
  // Add more data here...
];

const columns = [
  {
    title: 'Item No.',
    dataIndex: 'itemNo',
    key: 'itemNo',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Publish Date',
    dataIndex: 'publishDate',
    key: 'publishDate',
  },
  {
    title: 'Sales',
    dataIndex: 'sales',
    key: 'sales',
  },
  {
    title: 'Parts',
    dataIndex: 'parts',
    key: 'parts',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <>
        <Button type="link" icon={<EditOutlined />} />
        <Button type="link" icon={<DeleteOutlined />} />
      </>
    ),
  },
];

const CourseTable: React.FC = () => {
  return <Table dataSource={dataSource} columns={columns} />;
};

export default CourseTable;
