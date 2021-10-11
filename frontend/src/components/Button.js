import PropTypes from 'prop-types'

// Default onclick
const defonClick = () => {
    console.log('Button not functional.')
}

// TODO: change the style changes to be css based
const Button = ({ text, color, onClick }) => {
    return (
        <button onClick={onClick} style={{ color: color}} className='btn'>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'Green',
    text: 'Click',
    onClick: defonClick
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
