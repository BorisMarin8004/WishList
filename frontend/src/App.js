import './css/App.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import ManageItem from "./pages/ManageItem"
import ManageWishlist from "./pages/ManageWishlist"
import useToken from "./middleware/auth";
import Logout from "./pages/Logout";

export default function App() {

    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/item">Items</Link>
                        </li>
                        <li>
                            <Link to="/user-profile">View Profile</Link>
                        </li>
                        <li>
                            <Link to="/wishlist">Wishlists</Link>
                        </li>
                        <li>
                            <Link to="/log-out">Log Out</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/item">
                        <ManageItem />
                    </Route>
                    <Route path="/user-profile">
                        <UserProfile />
                    </Route>
                    <Route path="/wishlist">
                        <ManageWishlist />
                    </Route>
                    <Route path="/log-out">
                        <Logout  setToken={ setToken }/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}