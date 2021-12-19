import React, {useContext, useRef} from 'react';
import './Profile.css';
import {AuthContext} from "../Auth/store/auth-context";
import {useNavigate} from "react-router-dom";
import Container from "../Container";
import {cartActions} from "../store/cart-slice";
import {useDispatch} from "react-redux";

const ProfileForm = () => {
    const navigate = useNavigate();
    const newPasswordInput = useRef();
    const authCtx = useContext(AuthContext);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredNewPassword = newPasswordInput.current.value;

        fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC2Bud4_UpQ13uxYbfh1OrDgou1DDG1vmg", {
            method: "POST",
            body: JSON.stringify({
                idToken: authCtx.token,
                password: enteredNewPassword,
                returnSecureToken: false
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json().then(data => {
                console.log(data)
                navigate('/cart');
                dispatch(cartActions.changePasswordToast());
            })
        })
    }

    const logoutHandler = () => {
        authCtx.logout();
        navigate("/");
    }

    return (
        <Container>
            <div className="profile-form margin-100">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="new-password">New password</label>
                        <input type="password"
                               ref={newPasswordInput}
                               className="input mb-3"
                               placeholder="New password"/>
                    </div>
                    <div className="buttons">
                        <button className="newpassword-button">Send</button>
                        <button className="profile__btn" onClick={logoutHandler}>Logout</button>
                    </div>
                </form>
            </div>
        </Container>
    );
};

export default ProfileForm;