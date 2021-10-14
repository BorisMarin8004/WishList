import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../components/Button'
function UserProfile() {


    return(
        <div>
            <h1 class="title">Add an Item </h1>
            <div class ="container">
				<input type="text" name="item_name" placeholder="Item Name" class="editText"></input>
				<br></br>
				<input type="text" name="price"placeholder="Price"class="editText"></input>
				<br></br> 
				<input type="text" name="URL"placeholder="URL"class="editText"></input>
				<br></br>
				<input type="picture_url" name="password"placeholder="Picture URL"class="editText"></input>
				<br></br>
				<button>Add Item</button>
				<br></br>
            </div>
        </div>

    )
}

export default UserProfile