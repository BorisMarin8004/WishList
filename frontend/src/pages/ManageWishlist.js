import React from 'react'
import '../css/ManageWishlist.css'
import {unpackContext} from "../utils/contextUtils";

export default function ManageWishlist(userContext) {

    console.log(unpackContext(userContext))

    return (
        <div id="wishlist_page">
            <h1>My Wishlists</h1>
            <div className="wish_lists">
            </div>
        </div>
    )
}