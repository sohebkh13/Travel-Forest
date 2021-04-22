import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen"
import Contact from './contactUs'
import {auth} from "./firebase";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import Spain from "./countries/Spain";
import Scotland from "./countries/Scotland.js";
import Greece from "./countries/Greece";
import India from "./countries/India";
import Italy from "./countries/Italy";
import United_states from "./countries/united_states";
import Thailand from "./countries/thailand";
import Finland from "./countries/finland";
import Denmark from "./countries/denmark";
import Sweden from "./countries/sweden";
import Morocco from "./countries/morocco";
import South_africa from "./countries/south_africa";
import Japan from "./countries/japan";
import Malaysia from "./countries/malaysia";
import Brazil from "./countries/brazil";
import Agents from "./agents";

function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            if (userAuth){
                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email
                }))
            }else {
                dispatch(logout());
            }
        });

        return unsubscribe
    }, [dispatch]);



  return (
    <div className="App">
        <Router>
            {!user ? (
                <LoginScreen/>
            ):(
                <Switch>
                    <Route path="/profile">
                        <ProfileScreen/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/agents">
                        <Agents/>
                    </Route>
                    <Route exact path="/">
                        <HomeScreen/>
                    </Route>

                    <Route path="/scotland">
                        <Scotland/>
                    </Route>
                    <Route path="/india">
                        <India/>
                    </Route>
                    <Route path="/italy">
                        <Italy/>
                    </Route>
                    <Route path="/greece">
                        <Greece/>
                    </Route>
                    <Route path="/spain">
                        <Spain/>
                    </Route>
                    <Route path="/usa">
                        <United_states/>
                    </Route>
                    <Route path="/finland">
                        <Finland/>
                    </Route>
                    <Route path="/morocco">
                        <Morocco/>
                    </Route>
                    <Route path="/thailand">
                        <Thailand/>
                    </Route>
                    <Route path="/sweden">
                        <Sweden/>
                    </Route>
                    <Route path="/denmark">
                        <Denmark/>
                    </Route>
                    <Route path="/south africa">
                        <South_africa/>
                    </Route>
                    <Route path="/malaysia">
                        <Malaysia/>
                    </Route>
                    <Route path="/japan">
                        <Japan/>
                    </Route>
                    <Route path="/brazil">
                        <Brazil/>
                    </Route>


                </Switch>

            )}

        </Router>
    </div>
  );
}

export default App;
