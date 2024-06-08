import React from 'react';
import './backoffer.css'
import O1 from './assets/offer1.png'
import O2 from './assets/offer2.png'
import O3 from './assets/offer3.png'
function Backoffer(props) {
    return (
        <div className="backoffer">
            <div className="back-offer-heading">
                <p className="f-48 fw-400 text-white text-center"><span className="fw-700">A limited</span> seats opportunity</p>
                <p className="f-48 fw-400 text-white text-center">Fees <span className="fw-700">Back Offer</span></p>
            </div>
            <div className="backoffer-bottom">
                <div className="backoffer-left">
                    <div className="bol-card bol-card1">
                        <div className="bol-card-left">
                            <img src={O1} alt="Enroll" />
                        </div>
                        <div className="bol-card-middle">
                            <div className="bol-card-heading">Enroll </div>
                            <div className="bol-card-text">Enroll into your favorite  Course by paying <b>₹699</b></div>
                        </div>
                        <div className="bol-card-right">1</div>
                    </div>
                    <div className="bol-card bol-card2">
                        <div className="bol-card-left">
                            <img src={O2} alt="Course" />
                        </div>
                        <div className="bol-card-middle">
                            <div className="bol-card-heading">Complete Course </div>
                            <div className="bol-card-text">With all the lectures and Assignments.</div>
                        </div>
                        <div className="bol-card-right">2</div>
                    </div>
                    <div className="bol-card bol-card3">
                        <div className="bol-card-left">
                            <img src={O3} alt="Payment" />
                        </div>
                        <div className="bol-card-middle">
                            <div className="bol-card-heading">100% Refund awarded</div>
                            <div className="bol-card-text">Get <b>100% Fee</b> will return in your source bank account.</div>
                        </div>
                        <div className="bol-card-right">3</div>
                    </div>
                </div>
                <div className="backoffer-right">
                    <div className="backoffer-right-inner">
                        <div className="bor-top">Duration of course </div>
                        <div className="bor-bottom">
                            <ol>
                                <li>Get <b>lifetime course</b> access, Even after getting <b>100% refund.</b></li>
                                <li>For <b>100% refund</b> complete course within <b>3 months.</b></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Backoffer;