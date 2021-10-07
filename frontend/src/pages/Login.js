import AccountEntry from "../components/AccountEntry"
import AccountHeader from "../components/AccountHeader"
//import '../css/Login.css'
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import CreateAccount from "./CreateAccount"
import axios from "axios";
import { getLoginConfig } from "../network/RequestTemples";

function Login() {

    const [token, setToken] = useState('')

    const btnLoginClick = (cred) => {
        console.log({"username": cred.username, "password": cred.password})
        axios(getLoginConfig(cred)).then(
            res => {
                console.log(res.data)
                setToken(res.data.token)
            }
        ).catch(
            error => { console.log(error) }
        )
    }

    // TODO: rig this button
    // Go to Create Account page.
    const btnCreateAccountClick = () => {
        ReactDOM.render(
            <React.StrictMode>
                <CreateAccount />
            </React.StrictMode>,
            document.getElementById('root')
        )
    }

    return (
        <div className='container background-cover'>
            <AccountHeader text='Log-In' />
            <AccountEntry making={false} onClickTop={btnLoginClick} onClickBottom={btnCreateAccountClick}/>
        </div>
    )
}

export default Login