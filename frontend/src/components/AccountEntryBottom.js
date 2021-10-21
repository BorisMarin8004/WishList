import Button from './Button'
import PropTypes from 'prop-types'
import '../css/components/AccountEntryBottom.css'

const AccountEntryBottom = ({ making, onClick }) => {
    return (
        <div className="bottom">
            <p className='questionText'>{making ? 'Already have an account?' : "Don't have an account?"}</p>
            <Button text={making ? 'Log-In' : 'Create Account'} color='orange' onClick={onClick}/>
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
