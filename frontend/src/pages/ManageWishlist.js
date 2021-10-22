import React from 'react'
import Button from '../components/Button'
import '../css/ManageWishlist.css'
import Item from '../components/Item'


export default function ManageWishlist(userContext) {
    // TODO: Handles deletion of an item
    function handleDelete() {
        console.log("Delete clicked")
        // Use itemid to delete Item from Wishlist
        // Reload Wishlist
        
    }
    // TODO: Get wishlist based on user details
    /*
    axios(getWishlistModelConfig("get", token, {"user_id":userContext.})).then(
        res => {
            // console.log(userContext)
            setId(res.data[0].id)
            setUsername(inputUsername)
            setPassword(inputPassword)
        }
    ).catch(
        err => {
            console.log(err)
        }
    )
    */
    let i = 0;
    const items = [];
    for(i = 0; i < 7; i++) {
        items.push(<Item onclick={() => {handleDelete()}}/>);
    }
    return (
        <main>
            <div id="wishlistpage">
                <h1>My Wishlist</h1>
                {/* For each item in wishlist, add a new container */}
                <div className="items">
                    {items}
                </div>
            </div>
            <div className="background-cover-home">
            </div>
        </main>
    )
}