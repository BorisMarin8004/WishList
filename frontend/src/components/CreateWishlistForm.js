import Button from "./Button";
import {useState} from "react";
import axios from "axios";
import {getWishlistModelConfig} from "../network/RequestTemples";

const CreateWishlistForm = ({ userId, notifyOnWishlistCreate}) => {
    const [wishlistName, setWishlistName] = useState()

    function handleWishlistCreate(){
        axios(getWishlistModelConfig("post", {}, {"user_id": userId, "name": wishlistName})).then(
            res => {
                console.log("created new wishlist", res.data)
                alert("Wishlist created")
                notifyOnWishlistCreate()
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }

    return (
        <div>
            <div className="newWishlist">
                <div className="entryBox">
                    <label>Wishlist Name:</label>
                    <input
                        type='text'
                        placeholder='Enter New Wishlist Name'
                        onChange={(e) => setWishlistName(e.target.value)}
                    />
                </div>
                <div className="pad"/>
                <div className="buttons">
                    <Button text="Create Wishlist" color="green" onClick={handleWishlistCreate} />
                </div>
            </div>
        </div>
    )
}

export default CreateWishlistForm
