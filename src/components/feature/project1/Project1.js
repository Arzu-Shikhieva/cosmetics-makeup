import React from 'react';
import '../Projects.css';
import productOne from '../../../assets/product-1.png';
import vector from '../../../assets/product-vector.svg';
import {NavLink} from "react-router-dom";

const Project1 = (props) => {
    const {title, subtitle} = props;

    return (
        <div className="product__box product__box1">
            <div className="productImg">
                <img src={productOne} alt="product"/>
            </div>
            <div className="product__info">
                <h6 className="product__title">{title}</h6>
                <p className="product__subtitle">{subtitle}</p>
                <NavLink to="/" className="product__link">Load More</NavLink>
            </div>
        </div>
    );
};

export default Project1;