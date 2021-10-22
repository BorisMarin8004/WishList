import React, {useEffect, useState} from 'react'
import '../css/ManageWishlist.css'
import {unpackContext} from "../utils/contextUtils";
import axios from "axios";
import {getWishlistModelConfig} from "../network/RequestTemples";


export default function ManageWishlist(userContext) {
    const [context, setContext] = useState(unpackContext(userContext))
    const [wishlists, setWishlists] = useState()

    useEffect(() => {
        console.log(context)
        axios(getWishlistModelConfig("get", context.token, {"user_id": context.id })).then(
            res => {
                console.log(res.data)
                setWishlists(res.data)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }, [context])

    return (
        <div id="wishlist_page">
            <h1>My Wishlists</h1>
            <div className="wish_lists">
            </div>
        </div>
    )
}