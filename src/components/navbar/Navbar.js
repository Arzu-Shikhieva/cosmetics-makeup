import React, {useContext} from 'react';
import './Navbar.css';
import Container from "../Container";
import logo from '../../assets/logo.svg';
import {LoginOutlined, ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AuthContext} from "../Auth/store/auth-context";


const Navbar = () => {
    const quantity = useSelector(state => state.cart.totalQuantity);
    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;

    return (
        <Container>
            <nav className="navbar navbar-expand-lg ">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="logo"/>
                </NavLink>
                <button className="navbar-toggler shadow-none" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item menu-link">
                            <NavLink className="nav-link" to="/" activeclassname="active">home</NavLink>
                        </li>
                        <li className="nav-item menu-link">
                            <NavLink className="nav-link" to="/about" activeclassname="active">about us</NavLink>
                        </li>
                        <li className="nav-item menu-link">
                            <NavLink className="nav-link" to="/products" activeclassname="active">products</NavLink>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <Link className="nav-link" to="/contact">contact us</Link>*/}
                        {/*</li>*/}
                    </ul>
                    <form className="form-inline my-2 my-lg-0 icons">
                        {isLoggedIn && <NavLink to="/cart">
                            <div className="badge-block">
                                <ShoppingCartOutlined className="navbar__icon"/>
                                <span
                                    className="e-badge e-badge-success e-badge-overlap e-badge-notification">{quantity}</span>
                            </div>
                        </NavLink>}
                        {isLoggedIn && <NavLink to="/profile" className="user-icon">
                            <UserOutlined className="navbar__icon"/>
                        </NavLink>}
                        {!isLoggedIn && <NavLink to="/auth">
                            <LoginOutlined className="navbar__icon"/>
                        </NavLink>}
                    </form>
                </div>
            </nav>
        </Container>
    );
};

export default Navbar;