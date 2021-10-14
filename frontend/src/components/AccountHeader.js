import PropTypes from 'prop-types'
import '../css/AccountHeader.css'

const AccountHeader = ({ text }) => {
    return (
        <div className="title">
            <h1>{text}</h1>
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
