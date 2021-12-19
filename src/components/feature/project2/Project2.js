import React from 'react';
import productTwo from "../../../assets/product-2.png";
import vector2 from "../../../assets/vector-2.svg";
import {NavLink} from "react-router-dom";

const Project2 = (props) => {
    const {title, subtitle} = props;

    return (
        <div className="product__box product__box2">
            <div className="product__info">
                <h6 className="product__title">{title}</h6>
                <p className="product__subtitle">{subtitle} </p>
                <NavLink to="/" className="product__link">Load More</NavLink>
            </div>
            <div className="productImg">
                <img src={productTwo} className="productTwo" alt="product"/>
            </div>
        </div>
    );
};

export default Project2;