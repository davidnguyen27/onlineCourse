import React from 'react';
import { Card } from 'antd';

interface LiveStreamCardProps {
  name: string;
  status: string;
  avatar: string;
}

const LiveStreamCard: React.FC<LiveStreamCardProps> = ({ name, status, avatar }) => (
  <Card
    hoverable
    className="w-40 flex-shrink-0"
    cover={<img alt={name} src={avatar} className="p-4" />}
  >
    <Card.Meta title={name} description={status} />
  </Card>
);

export default LiveStreamCard;
