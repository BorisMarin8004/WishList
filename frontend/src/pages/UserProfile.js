import React, { useState} from 'react'
import "../css/pages/UserProfile.css"
import Button from "../components/Button";
import axios from "axios";
import { getUserModelConfig } from "../network/RequestTemples";

export default function UserProfile({id, username, setUsername, password, setPassword }) {
    const [ newUsername, setNewUsername ] = useState();
    const [ newPassword, setNewPassword ] = useState();

    console.log(username, password)

    function handleUserUpdate(){
        setUsername(newUsername)
        setPassword(newPassword)
        axios(getUserModelConfig("put", {} , {
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
            <h1>Your Username: {username}</h1>
            <div className="container">
                <div className="entryBox">
                    <label>New Username:</label>
                    <input
                        type='text'
                        placeholder='Enter New Username'
                        onChange={(e) => setNewUsername(e.target.value)}
                    />
                </div>
                <div className="pad"/>
                <div className="entryBox">
                    <label>New Password:</label>
                    <input
                        type='password'
                        placeholder='Enter New Password'
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className="pad"/>
                <div className="buttons">
                    <Button text="Update User" color="green" onClick={handleUserUpdate} />
                </div>
            </div>
        </div>
    )
}
