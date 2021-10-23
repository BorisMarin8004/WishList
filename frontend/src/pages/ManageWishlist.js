import React, {useEffect, useState} from 'react'
import '../css/ManageWishlist.css'
import axios from "axios";
import {getWishlistModelConfig} from "../network/RequestTemples";
import Wishlist from "../components/Wishlist";
import CreateWishlistForm from "../components/CreateWishlistForm";

export default function ManageWishlist({ userId }) {
    const [wishlists, setWishlists] = useState()

    function updateWishlists(){
        console.log("User ID: ", userId)
        axios(getWishlistModelConfig("get", {"user_id": userId }, {})).then(
            res => {
                setWishlists(res.data)
                console.log(res.data)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }

    useEffect(() => {
        updateWishlists()
    }, [userId])

    return (
        <div id="wishlist_page">
            <h1>My Wishlists</h1>
            <CreateWishlistForm userId={userId} notifyOnWishlistCreate={updateWishlists}/>
            <div className="wish_lists">
                {wishlists && wishlists.map((el) => <Wishlist key={el.id} wishlistObj={el} />)}
            </div>
        </div>
    )
}