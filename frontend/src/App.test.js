import { render, screen } from '@testing-library/react';
import App from './App';
import {getLoginConfig} from "./network/RequestTemples";
import axios from "axios";
import useToken from "./middleware/auth";

const TEST_PARAMS = Object.freeze({
    username: "admin",
    password: "admin",
})

async function getTokenRequest(){
    return (await axios(getLoginConfig({"username": TEST_PARAMS.username, "password": TEST_PARAMS.password}))).data.token;
}

test("Token", () => {
    const tokenRaw = getTokenRequest();
    expect(tokenRaw).toBeTruthy();
})

test("LocalStorage", () => {
    localStorage.setItem("token", JSON.stringify(getTokenRequest()))
    expect(localStorage.getItem("token")).toBeTruthy();
    localStorage.setItem("token", null)
    expect(localStorage.getItem("token")).toEqual("null");
})

test("Login", () => {
    render(<App />);
    const elementBeforeLogin = screen.getByText("Please Log In");
    expect(elementBeforeLogin).toBeInTheDocument();
    localStorage.setItem('token', JSON.stringify(getTokenRequest()))
    render(<App />);
    const homeElement = screen.getByText("Home")
    const itemsElement = screen.getByText("Items")
    const viewProfileElement = screen.getByText("View Profile")
    const wishlistElement = screen.getByText("Wishlists")
    const logoutElement = screen.getByText("Log Out")
    expect(homeElement).toBeInTheDocument();
    expect(itemsElement).toBeInTheDocument();
    expect(viewProfileElement).toBeInTheDocument();
    expect(wishlistElement).toBeInTheDocument();
    expect(logoutElement).toBeInTheDocument();
});

