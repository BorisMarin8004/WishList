import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import NoImage from '../images/defaultImg.png'

const Item = ({imghtml, name, desc, price, onclick}) => {
    return (
        <div className="item-container">
            <img className="item-img" src={imghtml} alt="not provided" />
            <label>{name}</label>
            <p>Description: {desc}</p>
            <p>Price: ${price}</p>
            <div className="item-button">
                <Button text="Delete" color="Red" width="100px" onClick={onclick}/>
            </div>
        </div>
    )
}

Item.defaultProps = {
    imghtml: NoImage,
    name: "Item Name",
    desc: "Item Description",
    price: 0.00
}

Item.propTypes = {
    price: PropTypes.number,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string,
    imghtml: PropTypes.string
}
export default Item
