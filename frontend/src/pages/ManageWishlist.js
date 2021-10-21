import React from 'react'
import Button from '../components/Button'
import '../css/ManageWishlist.css'
import Item from '../components/Item'


export default function ManageWishlist() {
    // TODO: Handles deletion of an item
    function handleDelete() {
        alert("Are you sure you want to delete this item?")
        console.log("Delete clicked")
    }
    // TODO: Get wishlist based on user details
    var i;
    const items = [];
    for(i = 0; i < 7; i++) {
        items.push(<Item onClick={() => {handleDelete()}}/>);
    }
    return (
        <main>
            <div id="wishlistpage">
                <h1>My Wishlist</h1>
                {/* For each item in wishlist, add a new container*/}
                <div className="items">
                    {items}
                </div>
            </div>
            <div className="background-cover-home">
            </div>
        </main>
    )
}