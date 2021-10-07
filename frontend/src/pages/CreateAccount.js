import AccountEntry from "../components/AccountEntry"
import AccountHeader from "../components/AccountHeader"
import Login from './Login'
import React from 'react'
import ReactDOM from 'react-dom'

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
    const btnCreateAccountClick = () => {
        
    }

    return (
        <div className='container'>
            <AccountHeader text='Create Account' />
            <AccountEntry making={true} onClickTop={btnCreateAccountClick} onClickBottom={btnLoginClick}/>
        </div>
    )
}

export default CreateAccount