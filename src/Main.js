import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import star from './images/icon-star.svg';

export function Main(props) {
    var number = 1
    const navigate = useNavigate();
    

    return (
        <div className="container">
        <img src={star} alt={"star"} />
        <h1>How did we do?</h1>
      
        <p>
          Please let us know how we did with your support request. All feedback is
          appreciated to help us improve our offering!
        </p>

        <ul>
          <li><button className="btn" onClick={() => number = 1}>1</button></li>
          <li><button className="btn" onClick={() => number = 2}>2</button></li>
          <li><button className="btn" onClick={() => number = 3}>3</button></li>
          <li><button className="btn" onClick={() => number = 4}>4</button></li>
          <li><button className="btn" onClick={() => number = 5}>5</button></li>
        </ul>
      
        <button className="btn-submit" id="submit-rating" onClick={() => navigate(`Thank-you/${number}`)}>Submit</button>
      </div>
    )
}

