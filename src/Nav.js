import React, {useEffect, useState} from "react";
import "./Nav.css";
import {useHistory} from "react-router-dom";
function Nav(){
    const [show, handleShow] = useState(false);
    const history = useHistory()
    const transitionNavBar = () => {
        if (window.scrollY > 20){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);

    return(
        <div className={`nav ${show && "nav-black"}`}>
            <div className="nav_contents">
                <img onClick={() => history.push("/")}
                    className="nav_logo" src="https://fontmeme.com/permalink/210328/3ffb7b9e2ad99e3160fc05b335a0f763.png" alt=""/>
                <img onClick={() => history.push("/profile")}
                     className="nav_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY87C4uQDIODEzXSdn5LGm7HhxSpuYyVdqyX_sFATr2IKsXDsN5BYlsiQjr0Ry6yrDqWw&usqp=CAU" alt=""/>
                {/*<img onClick={() => history.push("/contact")}*/}
                {/*    className="nav_contactUs" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY87C4uQDIODEzXSdn5LGm7HhxSpuYyVdqyX_sFATr2IKsXDsN5BYlsiQjr0Ry6yrDqWw&usqp=CAU" alt=""/>*/}
                <a onClick={() => history.push("/contact")} className="btn btn-1">
                    <svg>
                        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    Contact Us/Feedback
                </a>
                <a onClick={() => history.push("/agents")} className="btn btn-2">
                    <svg>
                        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    Travel Agents
                </a>


            </div>


        </div>
    )
}
export default Nav


