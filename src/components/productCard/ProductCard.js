import React, {useContext} from 'react';
import './ProductCard.css';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {cartActions} from "../store/cart-slice";
import {AuthContext} from "../Auth/store/auth-context";

const ProductCard = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);

    const {id, name, price, product_type, category, brand, image } = props;

    const handleAddToCart = () => {
        dispatch(cartActions.addItemToCart({
            id,
            name,
            price,
            product_type,
            category,
            brand,
            image
        }));
        dispatch(cartActions.successToast());
    }

    const handleWarning = () => {
        dispatch(cartActions.warningToast());
        setTimeout(() => {
            navigate("/auth");
        }, 1000);
    }

    const isLoggedIn = authCtx.isLoggedIn;

    return (
        <>
            <div className="col-lg-3">
                <div className="card product-card" key={id}>
                    <img className="card-img-top" src={image} alt="product"/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">${price}</p>
                        <NavLink to={`/products/${id}`} className="btn btn-primary detailBtn">view</NavLink>
                        {isLoggedIn && <button className="btn btn-warning bagBtn" onClick={handleAddToCart}>add to bag</button>}
                        {!isLoggedIn && <button className="btn btn-warning bagBtn" onClick={handleWarning}>add to bag</button>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;