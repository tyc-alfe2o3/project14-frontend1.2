// CommunicateForum.js
import React from 'react';
import { Layout, Button, Pagination } from 'antd';
import Comment from './Comment';
import "../css/CommunicateForum.css";

const { Content } = Layout;

const CommunicateForum = () => {
    return (
        <Layout>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                    <div className="top">
                        <ul>
                            <li><a href="#">最新</a></li>
                            <li><a href="#">关注</a></li>
                            <li><a href="#">我的</a></li>
                        </ul>
                        <Button type="primary">发布点评</Button>
                    </div>

                    <main>
                        <div className="title1">
                            <h2>最新评论</h2>
                            <p>共666条</p>
                        </div>
                        <section>
                            <ul>
                                {[...Array(4)].map((_, index) => (
                                    <Comment key={index} />
                                ))}
                            </ul>
                        </section>
                    </main>

                    <div className="pagination">
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                </div>
            </Content>
        </Layout>
    );
};

export default CommunicateForum;
