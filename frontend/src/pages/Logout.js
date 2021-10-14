import React from 'react';
import Login from "./Login";

export default function Logout({ setToken }) {
    setToken(null)
    return <Login setToken={setToken} />
}