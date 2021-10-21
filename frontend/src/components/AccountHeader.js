import PropTypes from 'prop-types'
import '../css/AccountHeader.css'

const AccountHeader = ({ text }) => {
    return (
        <div>
            <h1 id="head">{text}</h1>
        </div>
    )
}

AccountHeader.defaultProps = {
    text: 'Account Input'
}

AccountHeader.propTypes = {
    text: PropTypes.string.isRequired
}

export default AccountHeader
