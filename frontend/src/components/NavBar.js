import React from 'react'
import ReactDOM from 'react-dom'

const NavBar = () => {
    const btnLogoClick = () => {
        console.log("logo clicked.")
    }

    const btnWishlistClick = () => {
        console.log("wishlist clicked.")
    }

    const btnAddItemClick = () => {
        console.log("add item clicked.")
    }

    const btnProfileClick = () => {
        console.log("profile clicked.")
    }

    const btnLogoutClick = () => {
        console.log("logout button clicked.")
    }
    return (
        <div>
            <button>Logo Placeholder</button>
            <button>Wishlist Placeholder</button>
            <button>Add Item Placeholder</button>
            <button>Profile Placeholder</button>
            <button>Logout Placeholder</button>
        </div>
    )
}

export default NavBar
