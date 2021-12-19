import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem){
                state.items.push({
                    id: newItem.id,
                    price: Number(newItem.price),
                    quantity: 1,
                    totalPrice: Number(newItem.price),
                    name: newItem.name,
                    image: newItem.image
                })
            }else {
                existingItem.quantity++;
                existingItem.totalPrice = parseFloat(existingItem.totalPrice + newItem.price);
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity = state.totalQuantity - existingItem.quantity;
            state.items = state.items.filter(item => item.id !== existingItem.id);
        },
        decreaseQuantity(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
        successToast() {
            toast.success("Product added to cart!", {
                className: "custom-toast",
                draggable: true,
                closeOnClick: true,
                autoClose: true,
                position: toast.POSITION.TOP_LEFT
            });
        },
        warningToast() {
            toast.dark("You haven't registered!", {
                className: "custom-toast",
                draggable: true,
                closeOnClick: true,
                autoClose: true,
                position: toast.POSITION.TOP_CENTER
            })
        },
        errorToast() {
            toast.error("Product deleted from cart!", {
                className: "custom-toast",
                draggable: true,
                closeOnClick: true,
                autoClose: true,
                position: toast.POSITION.TOP_LEFT
            })
        },
        loginToast() {
            toast.success("Successfully logged in!", {
                className: "custom-toast",
                draggable: true,
                closeOnClick: true,
                autoClose: true,
                position: toast.POSITION.TOP_LEFT
            })
        },
        changePasswordToast() {
            toast.warn("Successfully changed password!", {
                className: "custom-toast",
                draggable: true,
                closeOnClick: true,
                autoClose: true,
                position: toast.POSITION.TOP_LEFT
            })
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;