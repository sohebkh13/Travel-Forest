import React, {useState} from "react";
import "./LoginScreen.css"
import SignupScreen from "./SignupScreen";
import LoginVideo from './video-1.mp4'
function LoginScreen(){
    const [signIn, setSignIn] = useState(false)

    return(
        <div className="loginScreen">
            <video src={LoginVideo} autoPlay loop muted/>
            <div className="loginScreen-background">
                <img
                    className="loginScreen-Logo"
                    src="https://fontmeme.com/permalink/210328/3ffb7b9e2ad99e3160fc05b335a0f763.png"
                    alt=""
                />
                <button onClick={() => setSignIn(true)} className="loginScreen-button">Sign In</button>
                <div className="loginScreen-gradient"></div>
            </div>
                <div className="loginScreen-body">
                    {signIn ? (
                        <SignupScreen/>
                    ):(
                        <>
                            <h1>You haven’t been everywhere, but it’s on your list. Bon Voyage!</h1>
                            <h2>Find the best places, Travel Anywhere.</h2>
                            <h3>Ready to explore?</h3>

                            <div className="loginScreen-input">
                                <form>
                                    <input type="email" placeholder="Email Address"/>
                                    <button onClick={() => setSignIn(true)} className="loginScreen-explorebtn">
                                        <rect x="0" y="0" fill="none" width="100%" height="100%"/>EXPLORE</button>
                                </form>
                            </div>
                        </>
                    )}
            </div>
        </div>
    )
}
export default LoginScreen