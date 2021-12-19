import React from 'react';
import './CTA.css';
import Container from "../Container";

const Cta = () => {
    return (
        <Container>
            <div className="cta margin-100">
                <Container>
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="cta__title">Enough talk, let's make you look beautiful</p>
                            <p className="cta__subtitle mb-0">There are many variations of passages of lorem Ipsum available, but the</p>
                        </div>
                        <div className="col-lg-6 cta__button">
                            <div className="cta-btn">
                                <button>Let's Started</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Container>
    );
};

export default Cta;