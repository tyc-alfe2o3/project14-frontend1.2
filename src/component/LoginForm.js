import {Button, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import React, {useState} from "react";

const LoginForm = ({ onSubmit })=>{
    const onFinish = () => {
        onSubmit(username, password);
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <Form name="login_form" onFinish={onFinish} className="login-form">
            <div className="login-header">
                <h1 className="title">SJTU 校园活动</h1>
                {/*<img src="/logo.png" alt="Logo" className="logo"/>*/}
            </div>
            <Form.Item name="username"
                       rules={[{required: true, message: '请输入用户名!'}]}>
                <Input value={username}
                       onChange={(e) => setUsername(e.target.value)}
                       prefix={<UserOutlined/>} placeholder="用户名"/>
            </Form.Item>
            <Form.Item name="password"
                       rules={[{required: true, message: '请输入密码!'}]}>
                <Input.Password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    prefix={<LockOutlined/>} placeholder="密码"/>
            </Form.Item>
            <div
                style={{
                    marginBlockEnd: 24,
                }}
            >
                <Link to='/register'>新账号？前往注册</Link>
                <a
                    style={{
                        float: 'right',
                    }}
                    href="#/"
                >
                    忘记密码
                </a>
            </div>
            <Form.Item>
                <Button type="danger" htmlType="submit" className="login-form-button" >
                    登录
                </Button>
            </Form.Item>
        </Form>
    );
};
export default LoginForm;