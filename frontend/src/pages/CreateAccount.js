import AccountEntry from "../components/AccountEntry"
import AccountHeader from "../components/AccountHeader"

function CreateAccount() {
    // TODO: rig this button
    // Go to Login page.
    const btnLoginClick = () => {
        console.log('login button clicked')
    }

    // TODO: rig this button
    // Try to create account based on user-input info.
    const btnCreateAccountClick = () => {
        console.log('createaccount button clicked')
    }

    return (
        <div className='container'>
            <AccountHeader text='Create Account' />
            <AccountEntry making={true} onClickTop={btnCreateAccountClick} onClickBottom={btnLoginClick}/>
        </div>
    )
}

export default CreateAccount