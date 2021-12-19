import React from 'react';
import {Routes, Route} from 'react-router-dom';

import AuthForm from "./components/Auth/Auth/AuthForm";
import Navbar from "./components/navbar/Navbar";
import Home from "./Home";
import About from "./components/about/About";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
import Profile from "./components/profile/Profile";
import Contact from "./components/contact/Contact";
import ProductDetails from "./components/productDetail/ProductDetails";
import ProfileForm from "./components/profile/ProfileForm";

import store from "./components/Auth/store/auth-context";
import {AuthContextProvider} from "./components/Auth/store/auth-context";

import {ToastContainer, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/footer/Footer";


const App = () => {

    return (
        <>
            <AuthContextProvider store={store}>
            <ToastContainer
                draggable={false} transition={Zoom} autoClose={1000} 
            />
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/auth"  element={<AuthForm/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:id" element={<ProductDetails/>}/>
                <Route path="/profile" element={<ProfileForm/>}/>
            </Routes>
                <Footer/>
            </AuthContextProvider>
        </>
    );
};

export default App;