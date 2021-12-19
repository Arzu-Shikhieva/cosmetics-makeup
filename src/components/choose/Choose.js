import React from 'react';
import './Choose.css';
import Container from "../Container";
import chooseIcon from '../../assets/choose-icon.png';
import choose from '../../assets/choose.png';
import arrow from '../../assets/arrow.svg';
import arrowvector from '../../assets/arrowvector.svg';
import {NavLink} from "react-router-dom";

const Choose = () => {
    return (
        <Container>
            <div className="choose margin-83">
                <div className="choose-content d-flex justify-content-between">
                    <div className="choose__heading">
                        <p className="choose__title">Why Choose Us ?</p>
                        <p className="choose__subtitle">How to use ? <br/>
                            learn more details.</p>
                    </div>

                    <div className="choose__image d-flex align-items-center">
                        <img src={chooseIcon} alt="choose"/>
                        <div className="choose__icon-text">
                            <p className="choose__icon-title">Dose not contain alcohol.</p>
                            <p className="choose__icon-subtitle">PH 3.5</p>
                        </div>
                    </div>
                </div>

                <div className="apply">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src={choose} alt="choose" className="apply__mainImg"/>
                        </div>
                        <div className="col-lg-6">
                            <div className="apply__content">
                                <h6 className="apply__title">Apply & Ingredients</h6>
                                <p className="apply__subtitle">
                                    Give your face that gorgeous sun-kissed look with high-quality bronzers! Makeup city is a house to international brands that sell natural-looking bronzers. Bronzing is about giving your face the perfect dimension and warmth.
                                    <br/>
                                    If you are looking for ways to warm up your pale skin, apply bronzer, and see the difference. Bronzer face seems the smart way to add glamour to your otherwise simplistic look.
                                </p>
                                <NavLink to="/" className="apply__link">
                                    <span className="arrows">
                                        <img src={arrowvector} alt="" className="arrowvector"/>
                                        <img src={arrow} alt="" className="arrow"/>
                                    </span>
                                    Learn More
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Choose;