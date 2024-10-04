import React from "react";
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReadCreate from "./ReadCreat";
import Create from "./CreateForm";

const Readbtn=()=>{
    return (
        <Router>
        <div className="mainsec">

            <div>
                
                <Routes>
                <Route path='/' element={<ReadCreate/>} />
                <Route path='/create' element={<Create/>} />
                </Routes>

            </div>

            


        </div>
        </Router>



    )

}

export default Readbtn;