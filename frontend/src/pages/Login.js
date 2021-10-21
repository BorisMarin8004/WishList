import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {getLoginConfig, getSignUpConfig} from "../network/RequestTemples";
import Button from "../components/Button";
import AccountHeader from '../components/AccountHeader'
import '../css/Login.css'

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
        <div>
            <AccountHeader text='Log-In' />
            <div className="container">
                <div className="entryBox">
                    <label>Username:</label>
                    <input
                        type='text'
                        placeholder='Enter Username'
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="pad"></div>
                <div className="entryBox">
                    <label>Password:</label>
                    <input
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="pad"></div>
                <div className="buttons">
                    <Button text="Login" color="green" onClick={handleLogin}/>
                    <div className="pad"></div>
                    <Button text="Sign Up" color="green" onClick={handleSignUp}/>
                </div>
            </div>
            <div className="background-cover">
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};