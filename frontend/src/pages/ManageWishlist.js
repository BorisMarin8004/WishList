import React from 'react'
import Button from '../components/Button'
import '../css/ManageWishlist.css'
import Item from '../components/Item'


export default function ManageWishlist() {
    // TODO: Handles deletion of an item
    function handleDelete() {
        console.log("Delete clicked")
    }
    // TODO: Get wishlist based on user details
    
    return (
        <main>
            <div id="wishlistpage">
                <h1>My Wishlist</h1>
                {/* For each item in wishlist, add a new container*/}
                <div className="items">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
            <div className="background-cover-home">
            </div>
        </main>
    )
}