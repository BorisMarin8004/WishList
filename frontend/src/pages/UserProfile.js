import React from 'react'
import React, { useState } from 'react';

export default function UserProfile({setToken}){

	const {token, setToken} = useToken();

	function updateProfile() {
		axios(getUpdateConfig({"first_name":first_name,
		"last_name":last_name, "username": username,  "password": password, "email":email })).then(
            res => setToken(res.data.token)
        ).catch(
            err => {
                alert("Invalid UserName")
                console.log(err)
            }
        )
    }

	const btnDeleteClick = () => {
		alert("Account Deleted")
	}
	

    return(
        <div>
            <h1 class="title"> Edit Profile</h1>
            <div class ="container">
				<input type="text" value={first_name} placeholder="First Name" class="editText"></input>
				<br></br>
				<input type="text" value={last_name} placeholder="Last Name"class="editText"></input>
				<br></br>
				<input type="text" value={username} placeholder="Username"class="editText"></input>
				<br></br>
				<input type="password" value={password} placeholder="Password"class="editText"></input>
				<br></br>
				<input type="text" value={email} placeholder="Email"class="editText"></input>
				<br></br>
				<button text="Save" onClick={updateProfile}>Save</button>
				<br></br>
				<button class ="redBtn" text ="Delete Account" onClick={deleteAccount}>Delete Account</button>
            </div>
        </div>

    )
}
//
// export default UserProfile
