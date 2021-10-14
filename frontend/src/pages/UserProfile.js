import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../components/Button'
function UserProfile() {


    return(
        
        <div>
            <h1 class="title"> Edit Profile</h1>
            <div class ="container">
				<input type="text" name="first_name" placeholder="First Name" class="editText"></input>
				<br></br>
				<input type="text" name="last_name"placeholder="Last Name"class="editText"></input>
				<br></br> 
				<input type="text" name="username"placeholder="Username"class="editText"></input>
				<br></br>
				<input type="password" name="password"placeholder="Password"class="editText"></input>
				<br></br>
				<input type="text" name="email"placeholder="Email"class="editText"></input>
				<br></br>
				<button>Save</button>
				<br></br>
				<button class ="redBtn">Delete Account</button>
            </div>
        </div>

    )
}

export default UserProfile