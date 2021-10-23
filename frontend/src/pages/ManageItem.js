import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {getItemModelConfig, getLoginConfig, getSignUpConfig, getUserModelConfig} from "../network/RequestTemples";
import Button from "../components/Button";
import AccountHeader from '../components/AccountHeader'
import '../css/pages/Home.css'
import { useUsername, usePassword, useId } from "../customHooks/auth";
import {unpackContext} from "../utils/contextUtils";
import '../css/pages/ManageItem.css'

/*  **Todo:
    add and remove item, to wishlist, user had access to item if its in their wishlist
    create empty wishlist and add the item
    add item will just add item to wishlist and stay on the page.
    have access to all wishlists.
    containers: Item Name, price, url, picture url, wishlist
    change parameters to take context as javascript object
    userContext.<whatever you want> - may not work

    **if user comes form wishlist, send back to wishlist - may be done using userContext.
*/

export default function ManageItem({ userContext }) {
    console.log(userContext)
    const context = userContext._currentValue
    console.log("first instance of user context",userContext)

    const [ inputItemName, setInputItemName ] = useState("");
    const [ inputURL, setInputURL ] = useState("");
    const [ inputPrice, setInputPrice ] = useState("");
    const [ inputDescription, setInputDescription ] = useState("");

    function handleAddItem() {
        axios(getItemModelConfig("post", context.token, {}, {
            "name": inputItemName,
            "url":inputURL,
            "price": inputPrice,
            "description": inputDescription
            })).then(
            res => {
                console.log(userContext)

                setInputItemName(inputItemName)
                setInputURL(inputURL)
                setInputPrice(inputPrice)
                setInputDescription(inputDescription)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }


    return(
        <div id="itemPage">
            <div id="title">
                <AccountHeader text='Manage Items'/>
            </div>
            <div className="itemInfo">
                <div className="entryBox">
                    <label>ItemName:</label>
                    <input
                        type='text'
                        placeholder='Enter the name of your item.'
                        value={inputItemName}
                        onChange={(e) => setInputItemName(e.target.value)}
                    />
                </div>
                <div className="pad"/>
                <div className="entryBox">
                    <label>url:</label>
                    <input
                        type='text'
                        placeholder='Enter URL'
                        value={inputURL}
                        onChange={(e) => setInputURL(e.target.value)}
                    />
                </div>
                <div className="pad"/>
                <div className="entryBox">
                    <label>price:</label>
                    <input
                        type='number'
                        placeholder='Enter price'
                        value={inputPrice}
                        onChange={(e) => setInputPrice(e.target.value)}
                    />
                </div>
                <div className="pad"/>
                <div className="entryBox">
                    <label>description:</label>
                    <input
                        type='text'
                        placeholder='Enter a description'
                        value={inputDescription}
                        onChange={(e) => setInputDescription(e.target.value)}
                    />
                </div>
                <div className="pad"/>
                <div className="buttons">
                    <Button text="Add" color="green" onClick={handleAddItem}/>
                    {/*<div className="pad"/>*/}
                    {/*<Button text="Sign Up" color="green" onClick={handleSignUp}/>*/}
                </div>
            </div>
        </div>
    )
}

