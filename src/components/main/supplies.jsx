import React from "react";
import './supplies.css'

function Supplies () {
    return(
        <div className="supplies">
            <h3>Supplies</h3>
            <div className="supplyInfo">
                <div>
                    <p>1000 nitrile gloves</p>
                    <p>200 hand sanitizers</p>
                    <h4>Current Stock Levels</h4>
                </div>
                <div>
                    <p>200 nitrile gloves / day</p>
                    <p>10 hand sanitizers / day</p>
                    <h4>Usage Rates</h4>
                </div>
                <div>
                    <p>N95 masks</p>
                    <p>Reorder</p>
                    <h4>Reorder Alerts</h4>
                </div>
                <div>
                    <p>Nitrile gloves 10%</p>
                    <p>Expire in 5 days</p>
                    <h4>Expiration Tracking</h4>
                </div>
            </div>
        </div>
    )
}

export default Supplies