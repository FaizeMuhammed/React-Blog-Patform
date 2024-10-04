import React from "react";
import { Link,useLocation } from "react-router-dom";
import Logobody from './Logobody'
import Button from "./Button";
import BlogForm from "./CreateForm";
import LoginForm from "./LoginForm";
import SignUpForm from "./Signup";

const ReadCreate=()=>{
    const loaction=useLocation();
    return (
        <div className="Appname">
        <div className="mainbtns">
            {loaction.pathname==='/' &&
                
                Button()
                

            }
            {loaction.pathname==='/create' &&(
                <>
                <BlogForm/>
                </>

            )}
            {loaction.pathname==='/Login' &&(
                <>
                <LoginForm/>
                </>

            )}
               {loaction.pathname==='/Signup' &&(
                <>
                <SignUpForm/>
                </>

            )}
            
        </div>
        <Logobody/>
        </div>
    )
}

export default ReadCreate;