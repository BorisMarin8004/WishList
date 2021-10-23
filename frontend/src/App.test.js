import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import {getLoginConfig} from "./network/RequestTemples";
import axios from "axios";

const TEST_PARAMS = Object.freeze({
    cred: {
        username: "admin",
        password: "admin"
    },
    // Page Element Identifier
    PEI: {
        homeElement: "Have you been nice this year?",
        itemsElement: "Manage Items",
        viewProfileElement: "Update user",
        wishlistElement: "My Wishlists",
        logoutElement: "Log-In"
    }
})

async function getTokenRequest(){
    return (await axios(getLoginConfig({"username": TEST_PARAMS.cred.username, "password": TEST_PARAMS.cred.password}))).data.token;
}

function getRouterElements(){
    return Object.freeze({
        homeElement: screen.getByText("Home"),
        itemsElement: screen.getByText("Items"),
        viewProfileElement: screen.getByText("View Profile"),
        wishlistElement: screen.getByText("Wishlists"),
        logoutElement: screen.getByText("Log Out")
    })
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
    const elementBeforeLogin = screen.getByText(TEST_PARAMS.PEI.logoutElement);
    expect(elementBeforeLogin).toBeInTheDocument();
    localStorage.setItem('token', JSON.stringify(getTokenRequest()))
    render(<App />);
    const routerElements = getRouterElements()
    for (let element in routerElements){
        expect(routerElements[element]).toBeInTheDocument();
    }
});

test("Routing", () => {
    localStorage.setItem('token', JSON.stringify(getTokenRequest()))
    render(<App />);
    const routerElements = getRouterElements()
    for (let element in routerElements){
        fireEvent.click(routerElements[element])
        expect(screen.getByText(TEST_PARAMS.PEI[element])).toBeInTheDocument()
    }
})

