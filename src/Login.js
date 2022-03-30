import React, {useState} from 'react';
import "./Login.css";
import {Link, useNavigate} from "react-router-dom";
import {auth} from "./firebase";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                navigation("/", {replace:false})
            })
            .catch(e => alert(e))
    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth) {
                    navigation("/", {replace:false})
                }
            }).catch(e => alert(e))
    }

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
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text"/>
                    <h5>비밀번호</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password"/>

                    <button onClick={signIn} className="login_signInButton">로그인</button>
                </form>
                <p> 이용 약관 동의하십니까?</p>
                <button onClick={register} className="login_registerButton">회원가입</button>
            </div>
        </div>
    );
}

export default Login;