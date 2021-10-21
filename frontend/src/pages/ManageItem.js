import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../components/Button'
function AddItem() {

	const {token, setToken} = useToken();

	function addItem() {
		axios(getAddItemConfig({"description":description, "price":price, "URL":URL,  })).then(
            res => setToken(res.data.token)
        ).catch(
            err => {
                console.log(err)
            }
        )
    }

    return(
        <div>
            <h1 class="title">Add an Item </h1>
            <div class ="container">
				<input type="text" value={description} placeholder="Description" class="editText"></input>
				<br></br>
				<input type="text" value={price} placeholder ="Price" class="editText"></input>
				<br></br>
				<input type="text" value={URL} placeholder="URL"class="editText"></input>
				<br></br>
				<button text="Add Item" onClick= {addItem}></button>
				<br></br>
            </div>
        </div>
    )
}

export default UserProfile
