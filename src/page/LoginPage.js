// import React from 'react';
// import { Input, Button } from 'antd';
// import '../css/LoginPage.css'; // assuming you have a CSS file for styling
//
// const LoginForm = () => {
//     return (
//         <div className="container">
//             <h1>Login</h1>
//             <form>
//                 <Input type="text" placeholder="用户名" />
//                 <Input.Password placeholder="密码" />
//                 <Button type="primary" htmlType="submit" className="login-btn">
//                     登录
//                 </Button>
//             </form>
//             <div className="options">
//                 <a href="forgot-password.html">忘记密码</a>
//                 <span>|</span>
//                 <a href="register.html">立即注册</a>
//             </div>
//         </div>
//     );
// };
//
// export default LoginForm;
import React, { useState } from 'react';
import '../css/LoginPage.css';
import LoginForm from "../component/LoginForm";
//import { login } from "../service/loginService";
import { Navigate } from 'react-router-dom';

const LoginFormPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        // 在这里执行登录逻辑，例如调用登录服务的函数
        // 如果登录成功，则设置isLoggedIn为true
        setIsLoggedIn(true);
    }

    // 如果用户已经登录，则跳转到主页
    if (isLoggedIn) {
        return <Navigate to="/home" />;
    }
    return (
        <div>
            <div className="login-form-container">
                <LoginForm onSubmit={handleLogin}/>
            </div>
        </div>
    );
};

export default LoginFormPage;