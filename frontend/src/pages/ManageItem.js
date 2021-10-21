import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {getLoginConfig, getSignUpConfig, getUserModelConfig} from "../network/RequestTemples";
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
*/

export default function Login({ ID, Token}) {
    const { inputUsername, setInputUsername } = useState();
    const { inputPassword, setInputPassword } = useState();

    return(
        <div>
            <AccountHeader text='Manage Items' />
            <div className="container">
                <div className="entryBox">
                    <label>ItemName:</label>
                    <input
                        type='text'
                        placeholder='Enter the name of your item.'
                        value={inputItemname}
                        onChange={(e) => setInputUsername(e.target.value)}
                    />
                </div>
                <div className="pad"/>
                <div className="entryBox">
                    <label>Password:</label>
                    <input
                        type='password'
                        placeholder='Enter Password'
                        value={inputPassword}
                        onChange={(e) => setInputPassword(e.target.value)}
                    />
                </div>
                <div className="pad"/>
                <div className="buttons">
                    <Button text="Login" color="green" onClick={handleLogin}/>
                    <div className="pad"/>
                    <Button text="Sign Up" color="green" onClick={handleSignUp}/>
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