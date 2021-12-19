import React from 'react';
import Header from "./components/header/Header";
import Feature from "./components/feature/Feature";
import Choose from "./components/choose/Choose";
import Cta from "./components/cta/CTA";

const Home = () => {
    return (
        <>
            <Header/>
            <Feature/>
            <Choose/>
            <Cta/>
        </>
    );
};

export default Home;