import React, {useContext, useEffect, useState} from 'react';
import './ProductDetail.css';
import {useNavigate, useParams} from "react-router-dom";
import Container from "../Container";
import axios from "axios";
import {useDispatch} from "react-redux";
import {cartActions} from "../store/cart-slice";
import {AuthContext} from "../Auth/store/auth-context";

const ProductDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    let {id} = useParams();
    const [detail, setDetail] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(res => setDetail(res.data))
    }, [id]);

    const handleAddToCart = () => {
        dispatch(cartActions.addItemToCart({
            id: id,
            name: detail.name,
            price: detail.price,
            quantity: detail.quantity,
            total: detail.totalPrice,
            image: detail.image
        }));
        dispatch(cartActions.successToast());
    }

    const handleWarning = () => {
        dispatch(cartActions.warningToast());
        setTimeout(() => {
            navigate("/auth");
        }, 3000);
    }

    const isLoggedIn = authCtx.isLoggedIn;

    return (
        <Container>
            <h2 className="product-name">{detail.product_type} - {detail.name}</h2>
            <hr className="style-title-hr"/>
            <div className="card">
                <img className="card-img" src={detail.api_featured_image} alt="product"/>
                    <div className="card-body">
                        <p className="card-text"><b>Brand:</b> {detail.brand}</p>
                        <p className="card-text"><b>Price:</b> {detail.price > 0 ? "$" +detail.price : "no price"}</p>
                        <p className="card-text"><b>Star rating:</b> {detail.rating === null ? "unrated" : detail.rating}</p>
                        {isLoggedIn && <button className="btn btn-warning bagBtn" onClick={handleAddToCart}>add to bag</button>}
                        {!isLoggedIn && <button className="btn btn-warning bagBtn" onClick={handleWarning}>add to bag</button>}
                        <hr className="style-text-hr"/>
                        <p className="card-text"><b>Description:</b> {detail.description}</p>
                        <p className="card-text"><b>Tags:</b> {detail.tag_list ? detail.tag_list : "no tag"}</p>
                    </div>
            </div>
        </Container>
    )
};

export default ProductDetails;