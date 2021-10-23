import React, {useEffect, useState} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from "axios";
import {
    getItemModelConfig,
    getLoginConfig,
    getSignUpConfig,
    getUserModelConfig,
    getWishlistModelConfig
} from "../network/RequestTemples";
import Button from "../components/Button";
import AccountHeader from '../components/AccountHeader'
import '../css/pages/Login.css'
import { useUsername, usePassword, useId } from "../customHooks/auth";
import {unpackContext} from "../utils/contextUtils";

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


export default function ManageItem( userContext ) {
    const [context, setContext] = useState(unpackContext(userContext))
    console.log("user context token in ManageItems",context)
    const [wishlists, setWishlists] = useState("")

    const [ wishListId, setWishListId ] = useState("");
    const [ inputItemName, setInputItemName ] = useState("");
    const [ inputURL, setInputURL ] = useState("");
    const [ inputPrice, setInputPrice ] = useState("");
    const [ inputDescription, setInputDescription ] = useState("");



    useEffect(() => {
        console.log(context)
        axios(getWishlistModelConfig("get", context.token, {"user_id": context.id })).then(
            res => {
                console.log('user wishlists:', res.data)
                setWishlists(res.data.id)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }, [context])

    function handleAddItem() {

        function updateWishList( item ){
            axios(getWishlistModelConfig("put", context.token, {"id":wishListId}, {} )).then(
                res => {
                    console.log(res.data)
                }
            ).catch(
                err => {
                    console.log(err)
                }
            )
        }

        function getItemId( ) {
            axios(getItemModelConfig("get", context.token, {'name': inputItemName})).then(
                res => {
                    console.log(res.data)
                    updateWishList(res.data)
                }
            ).catch(
                err => {
                    console.log(err)
                }
            )

        }
        axios(getItemModelConfig("post", context.token, {}, {
            "name": inputItemName,
            "url":inputURL,
            "price": inputPrice,
            "description": inputDescription
            })).then(
            res => {

                console.log('Item Config Successful for:',userContext)
                getItemId()

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
    const handleWishlistChange = (e) => {
        setWishListId(e.target.value)
    }

    return (
        <div>
            <AccountHeader text='Manage Items' />
            <div className="container">
                <div className="entryBox">
                    <select onChange={handleWishlistChange} title="Select a Wishlist">
                        {wishlists && wishlists.map(el =>
                            <option key={el.id} value={el.id}>{el.name}</option>
                        )};

                        {/*<option value=""> -- Select a Wishlist -- </option>*/}
                        {/*    {wishlists && wishlists.map((el, ) => <option key={el.id} value={el.id}>{el.name}</option>)}*/}
                        {/*{console.log(wishlists)}*/}
                        {/*key={fruit.label} value={fruit.value}>{fruit.label}*/}
                    </select>
                    {/*<DropdownMenu onChange= {(e) => setWishListId(e.target.value)}>*/}
                    {/*{*/}
                    {/*    wishlists && wishlists.map((el) =>*/}
                    {/*    <Dropdown.Item*/}
                    {/*        key={el.id}>{el.name}*/}
                    {/*    </Dropdown.Item>*/}
                    {/*    )*/}
                    {/*}*/}
                    {/*</DropdownMenu>*/}
                </div>
                <div className="pad"/>
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
            </div>
        </div>
        </div>
    )}

