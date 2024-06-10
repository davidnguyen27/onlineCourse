import React from 'react';
import { Row, Col, Typography } from 'antd';
import {
  MobileOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  GlobalOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

const features = [
  {
    icon: <MobileOutlined style={{ fontSize: '32px' }} />,
    title: "Mobile learning",
    description: "Quisque nec volutpat sem. Interdum et malesuada fames ac ante ipsum primis in faucibus."
  },
  {
    icon: <TeamOutlined style={{ fontSize: '32px' }} />,
    title: "Academic & Technical Support",
    description: "Quisque nec volutpat sem. Interdum et malesuada fames ac ante ipsum primis in faucibus."
  },
  {
    icon: <SafetyCertificateOutlined style={{ fontSize: '32px' }} />,
    title: "Sharable Certificates",
    description: "Quisque nec volutpat sem. Interdum et malesuada fames ac ante ipsum primis in faucibus."
  },
  {
    icon: <GlobalOutlined style={{ fontSize: '32px' }} />,
    title: "An Inclusive Experience",
    description: "Quisque nec volutpat sem. Interdum et malesuada fames ac ante ipsum primis in faucibus."
  }
];

const AboutPage: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100">
      <div className="text-center mb-16">
        <Title level={2}>Improving Lives Through Learning</Title>
      </div>
      <div className="text-center mb-16">
        <Title level={3}>Our Features</Title>
        <Text>On Cursus, you have access to:</Text>
      </div>
      <Row gutter={[16, 16]} justify="center">
        {features.map((feature, index) => (
          <Col key={index} xs={24} sm={12} md={6} className="text-center">
            <div className="p-4 bg-white rounded-lg shadow-md">
              {feature.icon}
              <Title level={4} className="mt-4">{feature.title}</Title>
              <Text>{feature.description}</Text>
            </div>
          </Col>
        ))}
      </Row>
      <div className="mt-16">
        <Row justify="center">
          <Col xs={24} md={12} className="text-center">
            <Title level={3}>Our Story</Title>
            <div className="border-t-2 border-red-500 w-16 mx-auto mb-4"></div>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur vel dolor id ultrices.
              Proin a magna at mi pretium pulvinar in eu enim. Nulla vel lacus lectus. Donec at venenatis
              neque. Nullam nec vehicula elit. Cras et nibh id urna fermentum aliquam.
            </Text>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutPage;
