import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import axios from 'axios'
import { getItemModelConfig } from '../network/RequestTemples'

const Item = ({ item, notifyOnItemDelete }) => {
    function handleDelete(itemId){
        console.log("handle delete")
        axios(getItemModelConfig("delete", {}, {"id": itemId})).then(
            res => {
                console.log("item deleted", res)
                notifyOnItemDelete()
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }

    return (
        <div className="item-container">
            <img className="item-img" src={item.url} alt="not provided" />
            <label>{item.name}</label>
            <p>Description: {item.description}</p>
            <p>Price: ${item.price}</p>
            <div className="item-button">
                <Button text="Delete" color="Red" width="100px" onClick={() => handleDelete(item.id)}/>
            </div>
        </div>
    )
}

export default Item
