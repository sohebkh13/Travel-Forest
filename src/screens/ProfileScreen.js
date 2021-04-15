import React from "react";
import "./ProfileScreen.css"
import Nav from "../Nav";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import {auth} from "../firebase";


function ProfileScreen(){
    const user = useSelector(selectUser)
    return(
        <div className="profileScreen">
            <Nav/>
            <div className="profileScreen-body">
                <h1>Profile<h4>(Click the Travel Forest logo to reach the home screen)</h4></h1>

                <div className="profileScreen-info">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY87C4uQDIODEzXSdn5LGm7HhxSpuYyVdqyX_sFATr2IKsXDsN5BYlsiQjr0Ry6yrDqWw&usqp=CAU"
                        alt=""
                    />
                    <div className="profileScreen-details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen-plans">
                            <button onClick={() => auth.signOut()} className="profileScreen-signOut">Sign Out</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileScreen