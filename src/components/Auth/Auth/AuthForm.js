import React, {useContext, useRef, useState} from 'react';
import './AuthForm.css';
import {AuthContext} from "../store/auth-context";
import {useNavigate} from "react-router-dom";
import Container from "../../Container";
import {cartActions} from "../../store/cart-slice";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";

const AuthForm = () => {
    const navigate = useNavigate();

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const authCtx = useContext(AuthContext);
    const dispatch = useDispatch();

    const switchAuthModelHandler = () => {
        setIsLogin((prevState => !prevState));
    }

    const signupHandler = (e) => {
        e.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoading(true);
        let url;
        if (isLogin) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC2Bud4_UpQ13uxYbfh1OrDgou1DDG1vmg"
        }else {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC2Bud4_UpQ13uxYbfh1OrDgou1DDG1vmg"
        }
        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => {
            setIsLoading(false);
            if (res.ok) {
                return res.json();
            }else {
                return res.json().then(data => {
                    let errorMessage = 'Authentication failed';
                    // console.log(errorMessage);
                    if (data && data.error && data.error.message) {
                        errorMessage = data.error.message;
                    }
                    throw new Error(errorMessage);
                });
            }
        }).then(data => {
            authCtx.login(data.idToken);
            navigate('/cart');
            dispatch(cartActions.loginToast());
        }).catch(err => {
            toast.dark(err.message, {
                className: "custom-toast",
                draggable: true,
                position: toast.POSITION.TOP_LEFT
            })
        })
    }

    return (
        <Container>
            <div className="authForm">
                <form className="my-5 py-5" onSubmit={signupHandler}>
                    <div className="form-group">
                        <input type="email"
                               ref={emailInputRef}
                               className="input mb-3"
                               placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <input type="password"
                               ref={passwordInputRef}
                               className="input mb-3"
                               placeholder="Password"/>
                    </div>
                    {!isLoading && <button type="submit" className="auth__button">{isLogin ? 'Login' : 'Create Account'}</button>}
                    {isLoading && <p>Sending request...</p>}
                    <p onClick={switchAuthModelHandler} className="auth__text">
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </p>
                </form>
            </div>
        </Container>
    );
};

export default AuthForm;