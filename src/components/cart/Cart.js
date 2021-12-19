import React from 'react';
import {useSelector} from "react-redux";
import CartItem from "./CartItem";
import Container from "../Container";

const Cart = () => {
    const cartProducts = useSelector(state => state.cart.items);

    return (
        <Container>
            <div className="row">
                {cartProducts.length > 0 &&
                    <>
                        <table className="table">
                            <thead className="thead-dark text-center">
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total Quantity</th>
                                <th scope="col">Total Price</th>
                                <th></th>
                            </tr>
                            </thead>
                            {cartProducts.map((product, id) => {
                                return (
                                    <>
                                        <tbody className="text-center">
                                        <tr>
                                            <CartItem key={id} product={{
                                                id: product.id,
                                                name: product.name,
                                                price: product.price,
                                                product_type: product.product_type,
                                                category: product.category,
                                                brand: product.brand,
                                                quantity: product.quantity,
                                                totalPrice: product.totalPrice,
                                                image: product.image
                                            }}/>
                                        </tr>
                                        </tbody>
                                    </>
                                )
                            })}
                        </table>
                    </>
                }

                {cartProducts.length === 0 && (
                    <div className="noItem">
                        <p>Your cart is empty</p>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default Cart;