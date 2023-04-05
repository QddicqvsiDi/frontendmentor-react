import React from "react";
import './Styles.scss';
import { Route, Routes, useNavigate } from "react-router-dom";
import { Main } from "./Main";
import { Thank } from "./Thank";

function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>}/> 
          <Route path="/Thank-you/:num" element={<Thank/>}/>
        </Routes>
      </div>
    );
  }

export default App;
