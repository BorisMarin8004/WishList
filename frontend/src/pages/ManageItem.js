import React, {useEffect, useState} from 'react';
import axios from "axios";
import { getItemModelConfig, getWishlistModelConfig } from "../network/RequestTemples";
import Button from "../components/Button";
import AccountHeader from '../components/AccountHeader'
import '../css/pages/Login.css'
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
    const [ wishlists, setWishlists ] = useState("")
    const [ wishListId, setWishListId ] = useState("");

    const [ inputItemName, setInputItemName ] = useState("");
    const [ inputURL, setInputURL ] = useState("");
    const [ inputPrice, setInputPrice ] = useState("");
    const [ inputDescription, setInputDescription ] = useState("");



    useEffect(() => {
        console.log(context)
        axios(getWishlistModelConfig("get", {"user_id": context.id })).then(
            res => {
                console.log('user wishlists:', res.data)
                setWishlists(res.data)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }, [context])

    function updateWishList(newItemId){
        function sendUpdateRequest(item_ids) {
            console.log("New item ids", item_ids)
            axios(getWishlistModelConfig("put", {},{
                "id": wishListId,
                "user_id": context.id,
                "item_ids": item_ids.join(",")
            })).then(
                res => {
                    console.log(res)
                }
            ).catch(
                err => {
                    console.log(err)
                }
            )
        }
        axios(getWishlistModelConfig("get", {"id": wishListId})).then(
            res => {
                let item_ids = res.data[0].item_ids
                console.log("old: ", item_ids)
                console.log("addition: ", newItemId)
                item_ids.push(newItemId)
                console.log('new:', item_ids)
                sendUpdateRequest(item_ids)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }

    function handleAddItem() {
        axios(getItemModelConfig("post",{}, {
            "name": inputItemName,
            "url": inputURL,
            "price": inputPrice,
            "description": inputDescription
        })).then(
            res => {
                console.log('Item Config Successful for:',userContext)
                updateWishList(res.data.id)
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
        <div id="itemPage">
            <div id="title">
                <AccountHeader text='Manage Items'/>
            </div>
            <div className="itemInfo">
                <div className="entryBox">
                    <select onChange={handleWishlistChange} title="Select a Wishlist">
                        <option value=""> -- Select a Wishlist -- </option>
                        {wishlists && wishlists.map((el, ) => <option key={el.id} value={ el.id}> {el.name} </option>)}
                    </select>
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

