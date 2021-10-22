import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {getItemModelConfig, getLoginConfig, getSignUpConfig, getUserModelConfig} from "../network/RequestTemples";
import Button from "../components/Button";
import AccountHeader from '../components/AccountHeader'
import '../css/pages/Login.css'
import { useUsername, usePassword, useId } from "../customHooks/auth";

/*  **Todo:
    add and remove item, to wishlist, user had access to item if its in their wishlist
    create empty wishlist and add the item
    add item will just add item to wishlist and stay on the page.
    have access to all wishlists.
    containers: Item Name, price, url, picture url, wishlist
    change parameters to take context as javascript object
    userContext.<whatever you want> - may not work
*/


export default function ManageItem({ userContext }) {

    const [ inputItemName, setInputItemName ] = useState("");
    const [ inputURL, setInputURL ] = useState("");
    const [ inputPrice, setInputPrice ] = useState("");
    const [ inputDescription, setInputDescription ] = useState("");

    function handleAddItem() {
        function setUserId(token){
            axios(getItemModelConfig("post", token, {}, {"name": inputItemName})).then(
                res => {
                    // console.log(userContext)
                    setInputItemName(inputItemName)
                    setInputURL(inputURL)
                    setInputPrice(inputPrice)
                    setInputDescription(inputDescription)


                    // setUsername(inputUsername)
                    // setPassword(inputPassword)
                }
            ).catch(
                err => {
                    console.log(err)
                }
            )
        }

    }


    return(
        <div>
            <AccountHeader text='Manage Items' />
            <div className="container">
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
            <div className="background-cover">
            </div>
        </div>
    )
}

Login.propTypes = {
    setId: PropTypes.func.isRequired,
    setToken: PropTypes.func.isRequired,
    setUsername: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired
};