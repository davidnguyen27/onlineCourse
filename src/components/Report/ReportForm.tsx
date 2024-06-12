import { Button, Flex, Form, Input, Select } from "antd";

const ReportForm = () => {
  const [form] = Form.useForm();
  return (
    <Form
      className=""
      form={form}
      scrollToFirstError
      style={{ paddingBlock: 32, marginInlineStart: "20px" }}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
    >
      <Form.Item wrapperCol={{ offset: 6 }}>
        <div className="text-xl font-bold">Submit Report</div>
      </Form.Item>

      <Form.Item name="username" label="UserName" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Position" name="position">
        <Select
          options={[
            { label: "User", value: "user" },
            { label: "Instructor", value: "instructor" },
          ]}
        />
      </Form.Item>

      <Form.Item name="description" label="Description">
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6 }}>
        <Flex gap="small">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button danger onClick={() => form.resetFields()}>
            Reset
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
};

export default ReportForm;
