import React, { useState } from "react";
import CheckOutDetail from "../components/CheckOutDetail";
import { Breadcrumb, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import "../styles/index.css";
import AppHeader2 from "../components/AppHeader2";
import AppFooter from "../components/AppFooter";
import OrderSummary from "../components/OrderSummary";
import SelectPayment from "../components/SelectPayment";
const { Content, Footer } = Layout;
const initialCartItems = [
    {
      id: 1,
      name: "The Web Developer Bootcamp",
      price: 50.0,
      quantity: 1,
      discount: 10.0,
      title: "Web Development | Python",
      author: "Ko Bin Hung",
      image:
        "https://miro.medium.com/v2/resize:fit:2560/1*DbUarpd2cmH9fLFXEQ5oeg.jpeg",
    },
    {
      id: 2,
      name: "React For Beginners",
      price: 20.0,
      quantity: 1,
      discount: 10.0,
      title: "Web Development | React",
      author: "Leonardo Mana",
      image:
        "https://wesbos.com/static/2c1ec59aaf97caa738566a34f5cea0ea/faec4/Screen-Shot-2018-02-28-at-10.13.05-AM.png",
    },
    {
      id: 3,
      name: "Typescripts",
      price: 40.0,
      quantity: 1,
      discount: 10.0,
      title: "Web Development",
      author: "Mac",
      image:
        "https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjaha71mccl3tg1ifvxsg.png",
    },
    {
      id: 4,
      name: "How to learn soft skills and build your career ?",
      price: 50.0,
      quantity: 1,
      discount: 20.0,
      title: "Soft Skills",
      author: "Kun Aguero",
      image:
        "https://pharmaconnections.in/wp-content/uploads/2024/01/soft-skills-scaled-1.jpeg",
    },
  ];

const CheckOut: React.FC = () => {
  const [nightMode, setNightMode] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout className={nightMode ? "night-mode" : ""}>
      <AppHeader2 />

      <Content>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <div className="bg-white">
            <Breadcrumb style={{ margin: "16px 0", padding: "0 140px" }}>
              <Breadcrumb.Item>
                <span
                  onClick={() => navigate("/")}
                  style={{ cursor: "pointer" }}
                >
                  Home
                </span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <span
                  onClick={() => navigate("/cart")}
                  style={{ cursor: "pointer" }}
                >
                  Cart
                </span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <span
                  onClick={() => navigate("/checkout")}
                  style={{ cursor: "pointer" }}
                >
                  Check Out
                </span>
              </Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ margin: "16px 0", padding: "0 140px" }}>
              <h1 className="text-2xl font-semibold mb-4">Check Out</h1>
            </div>
          </div>
          <div className="flex-grow">
            <div className="max-w-7xl mx-auto p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 bg-white rounded-lg shadow-md p-4">
                  <CheckOutDetail />
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 h-72">
                  <OrderSummary total={110} originalPrice={160} discountPrice={50} />
                </div>
                <div className="mt-4 bg-white md:col-span-2 rounded-lg shadow-md p-4">
                  <SelectPayment total={110} originalPrice={160} discountPrice={50} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Footer
        style={{
          backgroundColor: "black",
          textAlign: "center",
          width: "100%",
          padding: "24px 0",
        }}
      >
        <AppFooter />
      </Footer>
    </Layout>
  );
};

export default CheckOut;
