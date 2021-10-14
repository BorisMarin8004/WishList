import AccountEntry from "../components/AccountEntry"
import AccountHeader from "../components/AccountHeader"
import Login from './Login'
import React from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";
import {getSignUpConfig} from "../network/RequestTemples";
import '../css/Login.css'
import NavBar from "../components/NavBar"

function CreateAccount() {
    // TODO: rig this button
    // Go to Login page.
    const btnLoginClick = () => {
        ReactDOM.render(
            <React.StrictMode>
                <Login />
            </React.StrictMode>,
            document.getElementById('root')
        )
    }

    // TODO: rig this button
    // Try to create account based on user-input info.
    const btnCreateAccountClick = (cred) => {
        console.log({"username": cred.username, "password": cred.password})
        console.log(getSignUpConfig(cred))
        axios(getSignUpConfig(cred)).then(
            res => {
                console.log(res)
            }
        ).catch(
            error => {console.log(error)}
        )
    }

    return (
        <div>
            <NavBar />
            <div className="pad"></div>
            <AccountHeader text='Create Account' />
            <div className="container">
                <AccountEntry making={true} onClickTop={btnCreateAccountClick} onClickBottom={btnLoginClick}/>
            </div>
            <div className="background-cover"></div>
        </div>
    )
}

export default CreateAccount