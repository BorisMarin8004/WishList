import React, { useState} from 'react'
import {useId, usePassword, useUsername} from "../customHooks/auth";
import "../css/pages/UserProfile.css"
import Button from "../components/Button";
import axios from "axios";
import { getUserModelConfig } from "../network/RequestTemples";

export default function UserProfile({ token, id, setId, username, setUsername, password, setPassword }) {
    const [ newUsername, setNewUsername ] = useState();
    const [ newPassword, setNewPassword ] = useState();

    console.log(username, password)

    function handleUserUpdate(){
        setUsername(newUsername)
        setPassword(newPassword)
        axios(getUserModelConfig("put", token, {} , {
            "id": id,
            "username": newUsername,
            "password": newPassword
        })).then(
            res => alert(`User ${username} updated to ${res.data} registered`)
        ).catch(
            err => {
                alert("Registration failed")
                console.log(err)
            }
        )
    }

    return (
        <div>
            <h1>Your username: {username}</h1>
            <div className="entryBox">
                <label>New username:</label>
                <input
                    type='text'
                    placeholder='Enter New Username'
                    onChange={(e) => setNewUsername(e.target.value)}
                />
            </div>
            <div className="entryBox">
                <label>New password:</label>
                <input
                    type='password'
                    placeholder='Enter New Password'
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </div>
            <div className="buttons">
                <Button text="Update user" color="green" onClick={handleUserUpdate} />
            </div>
        </div>
    )
}
