import React from 'react';
import './Feature.css';
import Container from "../Container";
import Project1 from "./project1/Project1";
import Project2 from "./project2/Project2";

const Feature = () => {
    return (
        <Container>
            <div className="feature margin-83">
                <div className="feature__header">
                    <p className="feature__title">Best Cosmetic Products</p>
                    <p className="feature__subtitle">Launched in 2002, Makeup City has brought renowned international personal care brands under one roof for the first time in Pakistan. from a journey of a few stores, we have grown significantly, by making our brands available to almost every where a person can think off.</p>
                </div>
                <Project1 title="GOS- Primer Plus 30 ML" subtitle="GOSH COPENHAGEN offers a wide selection of products in different categories: Cosmetics, Fragrances, Hair Care, Face Care, Body Care. GOSH Cosmetics are available online. "/>
                <Project2 title="HD Micro Foundation Matifying Liquid" subtitle="HD Micro Foundation Matifying Liquid is a micronized and gently mattifying foundation with vitamin E for the most natural look. "/>
            </div>
        </Container>
    );
};

export default Feature;