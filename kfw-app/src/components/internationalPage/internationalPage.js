import React from 'react'
import './internationalPage.css';
import InternationalImage from './internationalPageImages/international4.jpg';

const InternationalPage = ()=>{
    return (
        <div>
            <div className="heading-container">
                <img src={InternationalImage} alt="international header" style={{ width: '100%' }} />
                <div className="centered">International</div>
            </div>

            <div className="container">

                <div className="text">
                    <div className = "spacing">
                        <p>For those interested in our product that live overseas, please contact our partner ______ for information on how we can bring our wine to you.</p>
                        <p>We offer shipping to ________.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InternationalPage;