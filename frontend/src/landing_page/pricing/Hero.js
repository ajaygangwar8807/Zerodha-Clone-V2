import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-buttom text-center">
        <h1>Charges</h1>
        <h3 className="text-muted mt-3 fs-5">List of all charges and taxes</h3>
        </div>
        <div className="row p-5 mt-5 text-center">
            <div className="col-4 p-5">
                <img src="media/images/pricingEquity.svg"/>
                <h1 className="fs-3">Free equity delivery</h1>
                <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col-4 p-5">
                <img src="media/images/intradayTrades.svg"/>
                <h1 className="fs-3">Free equity delivery</h1>
                <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col-4 p-5">
                <img src="media/images/pricingEquity.svg"/>
                <h1 className="fs-3">Free equity delivery</h1>
                <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
             
        </div>
    </div>
  );
}

export default Hero;
