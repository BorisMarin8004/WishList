import './css/App.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import ManageItem from "./pages/ManageItem"
import ManageWishlist from "./pages/ManageWishlist"
import { useToken } from "./customHooks/auth";
import Button from "./components/Button";

export default function App() {

    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={ setToken }/>
    }

    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">
                                <Button text="Home" color="green" width="300px" onClick={() => console.log("Home clicked")}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/item">
                                <Button text="Items" color="green" width="300px" onClick={() => console.log("Items clicked")}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/user-profile">
                                <Button text="View Profile" color="green" width="300px" onClick={() => console.log("View Profile clicked")}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/wishlist">
                                <Button text="Wishlists" color="green" width="300px" onClick={() => console.log("Wishlists clicked")}/>
                            </Link>
                        </li>
                        <li>
                            <Button text="Log Out" color="green" width="300px" onClick={() => {
                                console.log("Dropping token")
                                setToken(null)
                            }}/>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path={["/home", "/"]}>
                        <Home />
                    </Route>
                    <Route path="/item">
                        <ManageItem />
                    </Route>
                    <Route path="/user-profile">
                        <UserProfile token = { token } />
                    </Route>
                    <Route path="/wishlist">
                        <ManageWishlist />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}