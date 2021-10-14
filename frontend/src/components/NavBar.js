const NavBar = () => {
    
    
return (
        <nav class="nav_bar">
            <ul>
                <li><a href="/">My Wishlist</a></li>
                <li><a href="/AddItem">Add Item </a></li>
                <li><a href="/ViewProfile">View Profile</a></li>
                <li><button href="/LogOut">Log Out</button></li>
            </ul>
        </nav>
    )
}

export default NavBar
