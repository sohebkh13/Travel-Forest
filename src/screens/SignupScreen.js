import React, {useRef} from "react";
import './Signupscreen.css'
import {auth} from "../firebase";

function SignupScreen(){
    const emailRef = useRef(null);
    const passwordRef = useRef(null)

    const register = (e) =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser);
            })
            .catch((error) => {
                alert(error.message)
            });

    };
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        })
            .catch((error) => alert(error.message))
    };

    return(
        <div className="signupScreen">
            <form>
                <h1>Sign In<h4><span className="signupScreen-gray">(Click on "Sign up now" below after entering the credentials for automatic signup.)</span></h4>
                </h1>
                <input ref={emailRef} placeholder="Email Address" type="email"/>
                <input ref={passwordRef} placeholder="Password (must be at least 6 characters long)" type="password"/>
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className="signupScreen-gray">New to Travel Forest? </span>
                    <span className="signupScreen-link" onClick={register}>Sign Up now.</span></h4>
            </form>
        </div>
    )
}
export default SignupScreen