import Button from './Button'
import PropTypes from 'prop-types'

const AccountEntryBottom = ({ making, onClick }) => {
    return (
        <div>
            <p>{making ? 'Already have an account?' : "Don't have an account?"}</p>
            <Button text={making ? 'Log-In' : 'Create Account'} color='Orange' onClick={onClick}/>
        </div>
    )
}

AccountEntryBottom.defaultProps = {
    making: false
}

AccountEntryBottom.propTypes = {
    making: PropTypes.bool.isRequired
}

export default AccountEntryBottom
