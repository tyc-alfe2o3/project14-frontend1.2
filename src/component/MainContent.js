import React, { useState } from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space, Button } from 'antd';

const initialData = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `活动 ${i}`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

const MainContent = () => {
  const [activityType, setActivityType] = useState('全部活动');
  const [data, setData] = useState(initialData);

  const handleActivityTypeChange = (type) => {
    setActivityType(type);
    switch (type) {
      case '全部活动':
        setData(initialData);
        break;
      case '志愿活动':
        setData(Array.from({ length: 23 }).map((_, i) => ({
          href: 'https://ant.design',
          title: `志愿活动 part ${i}`,
          avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
          description: 'Description for volunteer activity.',
          content: 'Content for volunteer activity. Our volunteer programs are designed to make a meaningful impact in our community, promoting compassion, social responsibility, and positive change. By participating in our initiatives, volunteers have the opportunity to contribute their time and skills towards worthy causes, creating a brighter future for all.',
        })));
        break;
      case '社团活动':
        setData(Array.from({ length: 23 }).map((_, i) => ({
          href: 'https://ant.design',
          title: `社团活动 part ${i}`,
          avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
          description: 'Description for club activity.',
          content: 'Content for club activity. Our club activities encompass a diverse range of engaging projects, fostering teamwork, creativity, and personal growth. Through our carefully curated initiatives, we aim to cultivate a vibrant community of enthusiasts, providing ample opportunities for members to explore their interests, develop new skills, and make lasting memories together.',
        })));
        break;
      case '体育活动':
        setData(Array.from({ length: 23 }).map((_, i) => ({
          href: 'https://ant.design',
          title: `体育活动 part ${i}`,
          avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
          description: 'Description for sports activity.',
          content: 'Content for sports activity. Engaging in sports activities promotes physical fitness, teamwork, and sportsmanship. Our sports programs offer participants the chance to hone their athletic abilities, build camaraderie with teammates, and experience the thrill of competition in a supportive environment',
        })));
        break;
      case '比赛活动':
        setData(Array.from({ length: 23 }).map((_, i) => ({
          href: 'https://ant.design',
          title: `比赛活动 part ${i}`,
          avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
          description: 'Description for competition activity.',
          content: 'Content for competition activity. Participating in competitive events challenges individuals to push their limits, strive for excellence, and celebrate achievements. Our competition activities provide a platform for showcasing talent, fostering healthy rivalry, and inspiring participants to pursue their goals with passion and determination',
        })));
        break;
      default:
        break;
    }
  };

  return (
      <div>
        <Button onClick={() => handleActivityTypeChange('全部活动')}>全部活动</Button>
        <Button onClick={() => handleActivityTypeChange('志愿活动')}>志愿活动</Button>
        <Button onClick={() => handleActivityTypeChange('社团活动')}>社团活动</Button>
        <Button onClick={() => handleActivityTypeChange('体育活动')}>体育活动</Button>
        <Button onClick={() => handleActivityTypeChange('比赛活动')}>比赛活动</Button>

        <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={data}
            renderItem={(item) => (
                <List.Item
                    key={item.title}
                    actions={[
                      <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                      <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                      <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                      <img
                          width={272}
                          alt="logo"
                          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                      />
                    }
                >
                  <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                  />
                  {item.content}
                </List.Item>
            )}
        />
      </div>
  );
};

const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
);

export default MainContent;

