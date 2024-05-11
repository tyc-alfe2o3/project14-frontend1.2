import React from 'react';
import { Layout } from 'antd';
import Header from '../component/Header.js';
// import Navbar from '../component/Navbar';
import CalendarComponent from '../component/Calendar';
import Todolist from '../component/Todolist';

const { Content } = Layout;

const CalendarPage = () => {
  return (
    <Layout className="layout">
      {/*<Navbar />*/}
        <Header/>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280, display: 'flex' }}>
          <div style={{ flex: 2, marginRight: '20px' }}>
            <CalendarComponent />
          </div>
          <div style={{ flex: 1 }}>
            <Todolist />
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default CalendarPage;
