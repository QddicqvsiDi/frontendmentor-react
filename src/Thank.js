import React from "react";
import { Route, Routes, useParams, useNavigate } from "react-router-dom";
import thanky from './images/illustration-thank-you.svg';

export function Thank(props) {
    const {num} = useParams();
    const navigate = useNavigate();

    return (
    <div className="block">
        <div className="thank-you">
        <img src={thanky} alt={"thank-you"} />
        <p className="gray">
          You selected
          <span id="rating">{num}</span>
          out of 5
        </p>

        <h2>Thank you!</h2>

        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>

        <button className="btn-submit" id="rate-again" onClick={() => navigate('/')}>Rate Again</button>
      </div>
    </div>
    )
}

