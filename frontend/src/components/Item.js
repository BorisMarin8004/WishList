import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import NoImage from '../images/defaultImg.png'
import axios from 'axios'
import { getItemModelConfig } from '../network/RequestTemples'

const Item = ({itemid}) => {
    const [item, setItem] = useState()

    //Default values
    let imghtml = NoImage;
    let name = "Item Name";
    let desc = "Item description";
    let price = 0.00;

    //Get values from database based on passed itemid
    axios(getItemModelConfig("get", {"id": itemid})).then(
        res => {
            setItem(res.data)
        }
    ).catch(
        err => {
            console.log(err)
        }
    )

    imghtml = item.imghtml;
    name = item.name;
    desc = item.desc;
    price = item.price;

    function handleDelete() {
        console.log("Delete button clicked.");
    }


    return (
        <div className="item-container">
            <img className="item-img" src={imghtml} alt="not provided" />
            <label>{name}</label>
            <p>Description: {desc}</p>
            <p>Price: ${price}</p>
            <div className="item-button">
                <Button text="Delete" color="Red" width="100px" onClick={handleDelete}/>
            </div>
        </div>
    )
}

Item.propTypes = {
    itemid: PropTypes.number,
}
export default Item
