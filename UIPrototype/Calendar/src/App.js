import React from 'react';
import { Layout } from 'antd';
import Navbar from './component/Navbar';
import CalendarComponent from './component/Calendar';
import TodoList from './component/Todolist';

const { Content } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Navbar />
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280, display: 'flex' }}>
          <div style={{ flex: 2, marginRight: '20px' }}>
            <CalendarComponent />
          </div>
          <div style={{ flex: 1 }}>
            <TodoList />
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default App;
