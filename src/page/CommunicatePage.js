import React from 'react';
import { Layout, Menu, Button, Pagination } from 'antd';
// import '../css/Communicate.css'; // assuming you have a CSS file for styling
import Header from '../component/Header.js';
import Comment from '../component/Comment.js';
import CommunicateForum from '../component/CommunicateForum.js';
const { Content } = Layout;

const CommunicatePage = () => {
    return (
        <div className="community">
            <Header/>
            <CommunicateForum/>
        </div>
    );
};

export default CommunicatePage;
