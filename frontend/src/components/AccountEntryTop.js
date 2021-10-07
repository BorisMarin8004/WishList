import { useState } from 'react'
import PropTypes from 'prop-types'

const AccountEntryTop = ({ making, onClick }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!username) {
            alert('Please enter a username.')
            return
        }

        if(!password) {
            alert('Please enter a password.')
            return
        }

        onClick({ username, password })

        setUsername('')
        setPassword('')
    }
    return (
        <form className='account-form' onSubmit={onSubmit}>
            <div className='form-control userNameEntry'>
                <label className='userNameEntry-Text userNameEntry-Background'>Username</label>
                <input
                    type='text'
                    placeholder='Enter Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className='form-control passwordEntry'>
                <label className='passwordEntry-Text passwordEntry-Background'>Password</label>
                <input
                    type='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <input type='submit' value={making ? 'Create Account' : 'Log-In'} className='logInBtn logInBtn-Text logInBtn-Background'/>
        </form>
    )
}

AccountEntryTop.defaultProps = {
    making: false
}

AccountEntryTop.propTypes = {
    making: PropTypes.bool.isRequired
}

export default AccountEntryTop
