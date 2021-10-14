import PropTypes from 'prop-types'

// Default onclick
const defonClick = () => {
    console.log('Button not functional.')
}

// TODO: change the style changes to be css based
const Button = ({ text, color, onClick }) => {
    let rColor = "";
    if(color === "green") {
        rColor="#8EE167";
    } else if(color === "orange") {
        rColor = "#FFAF83";
    } else {
        rColor = "#ED5F5F";
    }
    return (
        <button onClick={onClick} style={{ color: rColor, backgroundColor: "white", borderRadius: "14px", boxShadow: "0px 4px 0px" + rColor, width: "478px", height: "60px", fontSize: "24px", border: "none"}} className='btn'>
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
