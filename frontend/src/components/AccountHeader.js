import PropTypes from 'prop-types'

const AccountHeader = ({ text }) => {
    return (
        <div>
            <h1 className='accountHeader'>{text}</h1>
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
