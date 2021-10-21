import './css/App.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import ManageItem from "./pages/ManageItem"
import ManageWishlist from "./pages/ManageWishlist"
import {useId, usePassword, useToken, useUsername} from "./customHooks/auth";
import Button from "./components/Button";
import React, {useState} from "react";

export default function App() {
    const { id, setId } = useId();
    const { token, setToken } = useToken();
    const { username, setUsername } = useUsername();
    const { password, setPassword } = usePassword();

    if(token == null) {
        return <Login
            setId = { setId }
            setToken = { setToken }
            setUsername = { setUsername }
            setPassword = { setPassword }
        />
    }

    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">
                                <Button text="Home" color="green" width="300px" onClick={() => console.log("Home clicked")}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/item">
                                <Button text="Items" color="green" width="300px" onClick={() => console.log("Items clicked")}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/user-profile">
                                <Button text="View Profile" color="green" width="300px" onClick={() => console.log("View Profile clicked")}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/wishlist">
                                <Button text="Wishlists" color="green" width="300px" onClick={() => console.log("Wishlists clicked")}/>
                            </Link>
                        </li>
                        <li>
                            <Button text="Log Out" color="green" width="300px" onClick={() => {
                                console.log("Dropping token")
                                setToken()
                                localStorage.clear()
                            }}/>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path={["/home", "/"]}>
                        <Home />
                    </Route>
                    <Route path="/item">
                        <ManageItem userContext = { React.createContext({ ...localStorage }) } />
                    </Route>
                    <Route path="/user-profile">
                        <UserProfile
                            id = { id }
                            setId = { setId }
                            token = { token }
                            setToken = { setToken }
                            username = { username }
                            setUsername = { setUsername }
                            password = { password }
                            setPassword = { setPassword }
                        />
                    </Route>
                    <Route path="/wishlist">
                        <ManageWishlist userContext = { React.createContext({ ...localStorage }) } />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}