import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import GoogleButton from "react-google-button";

const { Item } = Form;

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const myStyle = {
    backgroundImage: "url('public/images/login.jpg')",
    height: "350vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Layout className="container">
      <div style={myStyle}>
        <Content>
          <div className="form-container">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <div className="Login">Login</div>
              <Item
                className="input-item"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Item>
              <Item
                className="input-item"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Item>
              <Item>
                <Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Item>

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Item>
              <Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              </Item>
              <GoogleButton
                onClick={() => {
                  console.log("Google button clicked");
                }}
              />
              Or <a href="RegisterPage">register now!</a>
            </Form>
          </div>
        </Content>
      </div>
    </Layout>
  );
};

export default App;
