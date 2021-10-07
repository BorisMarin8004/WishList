import AccountEntryTop from './AccountEntryTop'
import AccountEntryBottom from './AccountEntryBottom'
import PropTypes from 'prop-types'
//import '../css/Login.css'

const AccountEntry = ({ making, onClickTop, onClickBottom }) => {
    return (
        <div className='inputBox inputBox-Background'>
            <AccountEntryTop making={making} onClick={onClickTop}/>
            <AccountEntryBottom making={making} onClick={onClickBottom}/>
        </div>
    )
}

AccountEntry.defaultProps = {
    making: false
}

AccountEntry.propTypes = {
    making: PropTypes.bool.isRequired
}

export default AccountEntry
