import React, { useState } from "react";
import { Space, Switch, Table, Modal, message } from "antd";
import type { TableProps } from "antd";

export interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

interface TableUserProps {
  onEdit: (record: DataType) => void;
  onDelete: (record: DataType) => void;
}

const TableUser: React.FC<TableUserProps> = ({ onEdit, onDelete }) => {
  const [data, setData] = useState<DataType[]>([
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "4",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "5",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "6",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "7",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ]);

  const handleEdit = (record: DataType) => {
    onEdit(record);
  };

  const handleDelete = (record: DataType) => {
    Modal.confirm({
      title: "Are you sure you want to delete this record?",
      onOk: () => {
        // Perform delete operation
        const newData = data.filter((item) => item.key !== record.key);
        setData(newData);
        message.success("Record deleted successfully");
      },
    });
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => <a onClick={() => handleEdit(record)}>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: () => <Switch defaultChecked />,
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleEdit(record)}>
            <i className="fa-solid fa-file-pen"></i>
          </a>
          <a onClick={() => handleDelete(record)}>
            <i className="fa-solid fa-trash"></i>
          </a>
        </Space>
      ),
    },
  ];

  return <Table className="my-5 rounded-none" columns={columns} dataSource={data} />;
};

export default TableUser;
