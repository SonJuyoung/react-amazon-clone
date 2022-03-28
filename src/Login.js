import React from 'react';
import "./Login.css";
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo"
                     src="https://upload.wikimedia.org/wikipedia/commons/6/62/Amazon.com-Logo.svg" alt=""/>
            </Link>

            <div className="login_container">
                <h1>로그인</h1>
                <form>
                    <h5>이메일</h5>
                    <input type="text"/>
                    <h5>비밀번호</h5>
                    <input type="password"/>

                    <button className="login_signInButton">로그인</button>
                </form>
                <p> 이용 약관 동의하십니까?</p>
                <button className="login_registerButton">회원가입</button>
            </div>
        </div>
    );
}

export default Login;