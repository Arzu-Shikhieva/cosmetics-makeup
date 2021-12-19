import React from 'react';
import './Footer.css';
import Container from "../Container";
import logo from '../../assets/logo.svg';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <Container>
            <div className="footer margin-300">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer__logo">
                            <img src={logo} alt="logo"/>
                            <p className="footer__text">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 d-flex justify-content-end">
                        <div className="footer_links">
                            <h6 className="footer__links-title">About</h6>
                            <ul>
                                <li>
                                    <NavLink to="/" className="footer__links-link">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className="footer__links-link">Features</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className="footer__links-link">FAGs</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className="footer__links-link">Reviews</NavLink>
                                </li>
                               <li>
                                   <NavLink to="/" className="footer__links-link">Stories</NavLink>
                               </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 d-flex justify-content-end">
                        <div className="footer_links">
                            <h6 className="footer__links-title">Privacy</h6>
                            <ul>
                                <li>
                                    <NavLink to="/" className="footer__links-link">Privacy</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className="footer__links-link">Policy</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className="footer__links-link">Payment</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className="footer__links-link">Terms</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 d-flex justify-content-end">
                        <div className="footer_links">
                            <h6 className="footer__links-title">Contact Us</h6>
                            <p className="footer__phone">+01 234 567 8910</p>
                            <p className="footer__email">shixlinskayar@gmail.com</p>

                            <div className="social-media__links d-flex justify-content-between">
                                <div className="social-media__icon">
                                    <i className="fa fa-instagram"></i>
                                </div>
                                <div className="social-media__icon">
                                    <i className="fa fa-linkedin"></i>
                                </div>
                                <div className="social-media__icon">
                                    <i className="fa fa-facebook"></i>
                                </div>
                                <div className="social-media__icon">
                                    <i className="fa fa-twitter"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="copyright">
                    <p>© Copyright 2021 Shixlinskayar. All rights reserved.</p>
                </div>
            </div>
        </Container>
    );
};

export default Footer;