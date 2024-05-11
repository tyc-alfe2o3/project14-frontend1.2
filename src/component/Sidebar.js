import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部活动');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Menu
        style={{ width: 256 }}
        mode="inline"
        defaultOpenKeys={['sub1']}
        selectedKeys={[selectedCategory]}
      >
        <SubMenu key="sub1" title="查看活动" icon={<AppstoreOutlined />}>
          <Menu.Item key="全部活动" onClick={() => handleCategoryChange('全部活动')}>
            全部活动
          </Menu.Item>
          <Menu.Item key="志愿活动" onClick={() => handleCategoryChange('志愿活动')}>
            志愿活动
          </Menu.Item>
          <Menu.Item key="社团活动" onClick={() => handleCategoryChange('社团活动')}>
            社团活动
          </Menu.Item>
          <Menu.Item key="体育活动" onClick={() => handleCategoryChange('体育活动')}>
            体育活动
          </Menu.Item>
          <Menu.Item key="比赛活动" onClick={() => handleCategoryChange('比赛活动')}>
            比赛活动
          </Menu.Item>
        </SubMenu>
      </Menu>
      <div style={{ marginLeft: 256, padding: '20px' }}>
        <MainContent category={selectedCategory} />
      </div>
    </div>
  );
};

const MainContent: React.FC<{ category: string }> = ({ category }) => {
  // 根据当前选中的类别渲染不同的内容
  switch (category) {
    case '全部活动':
      return 
    case '志愿活动':
      return 
    case '社团活动':
      return
    case '体育活动':
      return 
    case '比赛活动':
      return 
    default:
      return null;
  }
};

export default App;
