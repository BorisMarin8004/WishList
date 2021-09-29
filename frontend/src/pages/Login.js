import AccountEntry from "../components/AccountEntry"
import AccountHeader from "../components/AccountHeader"

function Login() {
    // TODO: rig this button
    // Check login information and login.
    const btnLoginClick = () => {
        console.log('login button clicked')
    }

    // TODO: rig this button
    // Go to Create Account page.
    const btnCreateAccountClick = () => {

    }

    return (
        <div className='container'>
            <AccountHeader text='Log-In' />
            <AccountEntry making={false} onClickTop={btnLoginClick} onClickBottom={btnCreateAccountClick}/>
        </div>
    )
}

export default Login