import React, { useState } from 'react';
import { Layout, Menu, Avatar,Form,Input,Button,Tag,List} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import GlobalHeader from '../component/Header'
import '../css/PersonalInfoPage.css';

const { Header, Footer, Sider, Content } = Layout;

const PersonalInfo = () => {
    const [basicInfoForm] = Form.useForm();
    const [hobbiesForm] = Form.useForm();
    const [tags, setTags] = useState(['阅读', '健身', '旅行']); // 默认标签

    const handleTagClose = removedTag => {
        const newTags = tags.filter(tag => tag !== removedTag);
        setTags(newTags);
    };

    const handleAddTag = () => {
        const newTag = hobbiesForm.getFieldValue('tag');
        if (newTag && !tags.includes(newTag)) {
            const newTags = [...tags, newTag];
            setTags(newTags);
            hobbiesForm.resetFields(['tag']);
        }
    };

    return (
            <div className="form-container">
                <Form
                    form={basicInfoForm}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                    onFinish={values => console.log('Basic Info Form:', values)}
                >
                    <h2>基本信息</h2>
                    <Form.Item label="昵称" name="nickname">
                        <Input />
                    </Form.Item>
                    <Form.Item label="ID" name="id">
                        <Input />
                    </Form.Item>
                    <Form.Item label="性别" name="gender">
                        <Input />
                    </Form.Item>
                    <Form.Item label="简介" name="bio">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item label="出生日期" name="dob">
                        <Input type="date" />
                    </Form.Item>
                    <Form.Item label="邮箱" name="email">
                        <Input type="email" />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
                        <Button type="primary" htmlType="submit">
                            保存
                        </Button>
                    </Form.Item>
                </Form>
                <Form
                    form={hobbiesForm}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                >
                    <h2>活动爱好</h2>
                    <Form.Item label="添加标签" name="tag">
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
                        <Button onClick={handleAddTag}>添加标签</Button>
                    </Form.Item>
                    <div>
                        {tags.map(tag => (
                            <Tag
                                key={tag}
                                closable
                                onClose={() => handleTagClose(tag)}
                            >
                                {tag}
                            </Tag>
                        ))}
                    </div>
                </Form>
            </div>
    );
};
const AccountManagement = () => {
    const handlePasswordChange = () => {
        // 处理修改密码逻辑
    };

    const handlePhoneChange = () => {
        // 处理修改手机逻辑
    };

    const handleEmailChange = () => {
        // 处理修改邮箱逻辑
    };

    const handleThirdPartyAccount = () => {
        // 处理绑定/解绑第三方账号逻辑
    };

    const handleViewLoginRecords = () => {
        // 处理查看登录记录逻辑
    };

    const handleAccountCancellation = () => {
        // 处理账号注销逻辑
    };

    return (
        <Layout>
            <Content className="account-content">
                <List bordered>
                    <List.Item actions={[<Button type="primary" onClick={handlePasswordChange}>修改密码</Button>]}>
                        密码
                    </List.Item>
                    <List.Item actions={[<Button type="primary" onClick={handlePhoneChange}>修改手机</Button>]}>
                        手机
                    </List.Item>
                    <List.Item actions={[<Button type="primary" onClick={handleEmailChange}>修改邮箱</Button>]}>
                        邮箱
                    </List.Item>
                    <List.Item actions={[<Button type="primary" onClick={handleThirdPartyAccount}>三方账号微信 QQ 绑定/解绑</Button>]}>
                        三方账号微信 QQ 绑定/解绑
                    </List.Item>
                    <List.Item actions={[<Button type="primary" onClick={handleViewLoginRecords}>登录记录查看记录</Button>]}>
                        登录记录
                    </List.Item>
                    <List.Item actions={[<Button type="primary" danger onClick={handleAccountCancellation}>账号注销</Button>]}>
                        账号注销
                    </List.Item>
                </List>
            </Content>
        </Layout>
    );
};
const MyFavorites = () => <div>这是我的收藏页面的内容</div>;
const BrowseHistory = () =><div>这是我的浏览历史的内容</div>;

const PersonalIfoPage = () => {
    const [content, setContent] = useState(<PersonalInfo />);

    const handleMenuClick = ({ key }) => {
        switch (key) {
            case 'personalInfo':
                setContent(<PersonalInfo />);
                break;
            case 'accountManagement':
                setContent(<AccountManagement />);
                break;
            case 'myFavorites':
                setContent(<MyFavorites />);
                break;
            case 'browseHistory':
                setContent(<BrowseHistory />);
                break;
            default:
                break;
        }
    };

    return (
        <Layout>
            <GlobalHeader/>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['personalInfo']}
                        style={{ height: '100%', borderRight: 0 }}
                        onClick={handleMenuClick}
                    >
                        <Menu.Item key="personalInfo">个人资料</Menu.Item>
                        <Menu.Item key="accountManagement">账号设置</Menu.Item>
                        <Menu.Item key="myFavorites">我的收藏</Menu.Item>
                        <Menu.Item key="browseHistory">浏览历史</Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {content}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Footer</Footer>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default PersonalIfoPage;


