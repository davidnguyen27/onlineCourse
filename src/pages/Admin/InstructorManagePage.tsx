import React, { useState } from "react";
import { Layout, Modal, Form, Input, message, Switch } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { AppFooter, AppHeader } from "../../components";
import { useSider } from "../../app/context/SiderContext";
import SiderAdmin from "../../components/Admin/SiderAdmin";
import TableUser, { DataType } from "../../components/Admin/TableUser"; // Ensure DataType is imported

const { confirm } = Modal;

const InstructorManagePage: React.FC = () => {
  const { collapsed } = useSider();
  const [isEditing, setIsEditing] = useState(false);
  const [editingRecord, setEditingRecord] = useState<DataType | null>(null);
  const [form] = Form.useForm();

  const handleEdit = (record: DataType) => {
    setEditingRecord(record);
    form.setFieldsValue(record);
    setIsEditing(true);
  };

  const handleDelete = (record: DataType) => {
    confirm({
      title: "Are you sure you want to delete this record?",
      onOk: () => {
        // Perform delete operation here, e.g., call an API to delete the record
        message.success("Record deleted successfully");
      },
    });
  };

  const handleSave = () => {
    form
      .validateFields()
      .then((values: DataType) => {
        // Update the edited record in data state
        const updatedRecord = { ...editingRecord, ...values };

        // Perform save operation here, e.g., call an API to save the changes
        // Replace the following line with your actual save operation
        console.log("Updated Record:", updatedRecord);

        setIsEditing(false);
        setEditingRecord(null);
        message.success("Record updated successfully");
      })
      .catch((error) => {
        console.error("Validation Error:", error);
      });
  };

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
          <SiderAdmin className={`transition-all duration-75 ${collapsed ? "w-0" : "w-64"}`} />
        </Sider>
        <Layout className="flex flex-1 flex-col">
          <Content className="flex-1 overflow-y-auto">
            <div className="p-8">
              <section>
                <h1 className="text-xl font-bold">Instructor Management</h1>
              </section>
              <div className="mt-4 bg-slate-200 p-4">
                <input
                  style={{ width: "100%" }}
                  type="text"
                  placeholder="Search by name, email, phone..."
                  className="h-8 rounded-md pl-8 text-xs"
                />
              </div>
              <TableUser onEdit={handleEdit} onDelete={handleDelete} />
            </div>
            <Footer className="footer">
              <AppFooter />
            </Footer>
          </Content>
        </Layout>
      </Layout>
      <Modal
        visible={isEditing}
        title="Edit Record"
        onCancel={() => {
          form.resetFields();
          setIsEditing(false);
        }}
        onOk={handleSave}
      >
        <Form form={form} layout="vertical" initialValues={editingRecord || undefined}>
          <Form.Item name="key" hidden>
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input the name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input the email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Please input the address!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[{ required: true, message: "Please input the phone number!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="status" label="Status" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role"
            rules={[{ required: true, message: "Please input the role!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default InstructorManagePage;
