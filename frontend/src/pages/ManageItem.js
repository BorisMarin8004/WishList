import React, {useEffect, useState} from 'react';
import axios from "axios";
import { getItemModelConfig, getWishlistModelConfig } from "../network/RequestTemples";
import Button from "../components/Button";
import AccountHeader from '../components/AccountHeader'
import '../css/pages/ManageItem.css'
import '../css/pages/Home.css'


export default function ManageItem( { userId } ) {
    const [ wishlists, setWishlists ] = useState("")
    const [ wishListId, setWishListId ] = useState("");

    const [ inputItemName, setInputItemName ] = useState("");
    const [ inputURL, setInputURL ] = useState("");
    const [ inputPrice, setInputPrice ] = useState("");
    const [ inputDescription, setInputDescription ] = useState("");

    useEffect(() => {
        console.log("User ID: ", userId)
        axios(getWishlistModelConfig("get", {"user_id": userId })).then(
            res => {
                console.log('user wishlists:', res.data)
                setWishlists(res.data)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }, [userId])

    function handleAddItem() {
        axios(getItemModelConfig("post",{}, {
            "name": inputItemName,
            "wish_list_id": wishListId,
            "url": inputURL,
            "price": inputPrice,
            "description": inputDescription
        })).then(
            res => {
                console.log('Item Config Successful for:', res.data)
                alert("Item added successfully")
            }
        ).catch(
            err => {
                console.log(err)
                alert("Could not create item")
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
                    <div className="dropdown">
                        <select onChange={handleWishlistChange} title="Select a Wishlist">
                            <option value="" className="select-option"> -- Select a Wishlist -- </option>
                            {wishlists && wishlists.map((el, ) => <option key={el.id} value={ el.id}> {el.name} </option>)}
                        </select>
                    </div>
                </div>
                <div className="pad"/>
                <div className="entryBox">
                    <label>Item Name:</label>
                    <input
                        type='text'
                        placeholder='Enter the name of your item.'
                        value={inputItemName}
                        onChange={(e) => setInputItemName(e.target.value)}
                    />
                </div>
                <div className="pad"/>
                <div className="entryBox">
                    <label>Image URL:</label>
                    <input
                        type='text'
                        placeholder='Enter URL'
                        value={inputURL}
                        onChange={(e) => setInputURL(e.target.value)}
                    />
                </div>
            <div className="pad"/>
            <div className="entryBox">
                <label>Price: $</label>
                <input
                    type='number'
                    placeholder='Enter price'
                    value={inputPrice}
                    onChange={(e) => setInputPrice(e.target.value)}
                />
            </div>
            <div className="pad"/>
            <div className="entryBox">
                <label>Description:</label>
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

