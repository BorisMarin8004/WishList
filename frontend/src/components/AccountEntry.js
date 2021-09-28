import AccountEntryTop from './AccountEntryTop'
import AccountEntryBottom from './AccountEntryBottom'
import PropTypes from 'prop-types'

const AccountEntry = ({ making, onClickTop, onClickBottom }) => {
    return (
        <div>
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
