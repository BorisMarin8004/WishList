import React, { useState} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {getLoginConfig, getSignUpConfig, getUserModelConfig} from "../network/RequestTemples";
import Button from "../components/Button";
import AccountHeader from '../components/AccountHeader'
import '../css/pages/Login.css'

export default function Login({ setId, setToken, setUsername, setPassword }) {
    const [ inputUsername, setInputUsername ] = useState("");
    const [ inputPassword, setInputPassword ] = useState("");

    function handleLogin() {
        function setUserId(token){
            axios(getUserModelConfig("get", token, {"username": inputUsername})).then(
                res => {
                    setId(res.data[0].id)
                    setUsername(inputUsername)
                    setPassword(inputPassword)
                }
            ).catch(
                err => {
                    console.log(err)
                }
            )
        }
        console.log(inputUsername, inputPassword)
        axios(getLoginConfig({"username": inputUsername, "password": inputPassword})).then(
            res => {
                setToken(res.data.token)
                setUserId(res.data.token)
            }
        ).catch(
            err => {
                alert("Incorrect Username or Password")
                console.log(err)
            }
        )
    }

    function handleSignUp() {
        axios(getSignUpConfig({"username": inputUsername, "password": inputPassword})).then(
            res => alert(`User ${res.data.username} registered`)
        ).catch(
            err => {
                alert("Registration failed")
                console.log(err)
            }
        )
    }

    return(
        <div id="loginPage">
            <div id="title">
                <AccountHeader text='Log-In' />
            </div>
            
            <div className="container">
                <div className="entryBox">
                    <label>Username:</label>
                    <input
                        type='text'
                        placeholder='Enter Username'
                        value={inputUsername}
                        onChange={(e) => setInputUsername(e.target.value)}
                    />
                </div>
                <div className="pad"/>
                <div className="entryBox">
                    <label>Password:</label>
                    <input
                        type='password'
                        placeholder='Enter Password'
                        value={inputPassword}
                        onChange={(e) => setInputPassword(e.target.value)}
                    />
                </div>
                <div className="pad"/>
                <div className="buttons">
                    <Button text="Login" color="green" onClick={handleLogin}/>
                    <div className="pad"/>
                    <Button text="Sign Up" color="green" onClick={handleSignUp}/>
                </div>
            </div>
            <div className="background">
                <div className="background-blur">
                </div>
                <div className="background-cover">
                </div>
            </div>
        </div>
    )
}

// Login.propTypes = {
//     setId: PropTypes.func.isRequired,
//     setToken: PropTypes.func.isRequired,
//     setUsername: PropTypes.func.isRequired,
//     setPassword: PropTypes.func.isRequired
// };