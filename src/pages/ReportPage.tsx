import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import AppHeader from "../components/AppHeader";
import Sider from "antd/es/layout/Sider";
import AppSider from "../components/AppSider";
import AppFooter from "../components/AppFooter";
import { useSider } from "../app/context/SiderProvider";
import { Button, Flex, Form, Input, Select } from "antd";

const ReportPage = () => {
  const { collapsed } = useSider();
  const [form] = Form.useForm();

  return (
    <Layout className="h-screen w-screen flex flex-col">
      <Header className="header">
        <AppHeader />
      </Header>
      <Layout className="flex flex-1">
        <Sider
          className="sider"
          collapsed={collapsed}
          collapsedWidth={0}
          trigger={null}
          width={220}
        >
          <AppSider
            className={`transition-all duration-75 ${collapsed ? "w-0" : "w-64"}`}
          />
        </Sider>

        <Layout className="flex flex-col flex-1">
          <Content className="flex-1 overflow-auto ">
            <div className="">
              <div
                style={{
                  marginTop: "2em",
                  marginBottom: "2em",
                  marginLeft: "50px",
                }}
              >
                <h1 className="font-bold text-xl">Thanks for reporting!</h1>
              </div>
              <div
                style={{
                  marginTop: "2em",
                  marginBottom: "1em",
                  marginInlineStart: "40px",
                  marginInlineEnd: "40px",
                }}
              >
                <h2>
                  Any member of the FPT community can flag content to us that
                  they believe violates our Community Guidelines. When something
                  is flagged, it’s not automatically taken down. Flagged content
                  is reviewed in line with the following guidelines:
                </h2>
              </div>
              <h3
                style={{
                  marginBottom: "0.5em",
                  marginInlineStart: "50px",
                  textIndent: "2em",
                }}
              >
                - Content that violates our Community Guidelines is removed from
                Edututs+.
              </h3>
              <h3
                style={{
                  marginBottom: "0.5em",
                  marginInlineStart: "50px",
                  textIndent: "2em",
                }}
              >
                - Content that may not be appropriate for all younger audiences
                may be age-restricted.
              </h3>
              <Form
                form={form}
                scrollToFirstError
                style={{ paddingBlock: 32 }}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
              >
                <Form.Item wrapperCol={{ offset: 6 }}>
                  <div className="font-bold text-xl">Submit Report</div>
                </Form.Item>

                <Form.Item
                  name="username"
                  label="UserName"
                  rules={[{ required: true }]}
                >
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

export default ReportPage;
