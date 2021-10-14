import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {getLoginConfig, getSignUpConfig} from "../network/RequestTemples";
import Button from "../components/Button";

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    function handleLogin() {
        axios(getLoginConfig({"username": username, "password": password})).then(
            res => setToken(res.data.token)
        ).catch(
            err => {
                alert("Incorrect Username or Password")
                console.log(err)
            }
        )
    }

    function handleSignUp() {
        axios(getSignUpConfig({"username": username, "password": password})).then(
            res => alert(`User ${res.data.username} registered`)
        ).catch(
            err => {
                alert("Registration failed")
                console.log(err)
            }
        )
    }

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUserName(e.target.value)} />
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <div>
                <Button text="Login" color="green" onClick={handleLogin}/>
                <Button text="Sign Up" color="green" onClick={handleSignUp}/>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};