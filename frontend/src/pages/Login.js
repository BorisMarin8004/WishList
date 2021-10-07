import AccountEntry from "../components/AccountEntry"
import AccountHeader from "../components/AccountHeader"
//import '../css/Login.css'
import React from 'react'
import ReactDOM from 'react-dom'
import CreateAccount from "./CreateAccount"

function Login() {
    // TODO: rig this button
    // Check login information and login.
    const btnLoginClick = () => {
        console.log('login button clicked')
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