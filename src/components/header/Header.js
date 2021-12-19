import React from 'react';
import './Header.css';
import Container from "../Container";
import delivery from '../../assets/delivery.png';
import headerProduct from '../../assets/header-products.png';
import playBtn from '../../assets/playBtn.svg';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header scale-up-center ">
            <Container>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="header__box">
                            <img src={delivery} alt="delivery"/>
                            <h2>Foundation Matte & Poreless</h2>
                            <p>Maybelline’s #1 foundation perfect for oily skin. No stickiness, no shine.</p>
                            <button className="bounce-left">Add To Cart</button>
                            <NavLink className="navLink" to="/">
                                <img src={playBtn} alt="play"/>
                                <span>How It Works</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="header__box">
                            <img className="productImg" src={headerProduct} alt="product"/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;