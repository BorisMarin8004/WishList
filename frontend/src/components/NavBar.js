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
        <nav class="nav_bar">
            <ul>
                <li><a href="/">My Wishlist</a></li>
                <li><a href="/AddItem">Add Item </a></li>
                <li><a href="/ViewProfile">View Profile</a></li>
                <li><a href="/LogOut">Log Out</a></li>
            </ul>
        </nav>
    )
}

export default NavBar
