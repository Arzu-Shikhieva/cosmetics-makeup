import React from 'react';
import './Cart.css';
import {cartActions} from "../store/cart-slice";
import {useDispatch} from "react-redux";

const CartItem = ({product}) => {
    const dispatch = useDispatch();

    const handleRemoveFromCart = () => {
        dispatch(cartActions.removeItemFromCart(product.id));
    }

    const HandleDecreaseQuantity = () => {
        dispatch(cartActions.decreaseQuantity(product.id))
    }

    const addQuantity = () => {
        dispatch(cartActions.addItemToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            totalPrice: product.totalPrice
        }));
    }

    return (
        <>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>
                <i onClick={HandleDecreaseQuantity} className="fa fa-minus"></i>
                <i onClick={addQuantity} className="fa fa-plus"></i>
            </td>
            <td>{product.quantity}</td>
            <td>${product.totalPrice.toFixed(2)}</td>
            <td>
                <i onClick={handleRemoveFromCart} className="fa fa-trash"></i>
            </td>

        </>
    );
};

export default CartItem;