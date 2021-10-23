import {useEffect, useState} from "react";
import Item from "./Item";
import axios from "axios";
import {getItemModelConfig} from "../network/RequestTemples";

const Wishlist = ({ wishlistObj }) => {

    const [ wishlist, setWishlist ] = useState(wishlistObj)

    function handleItemDelete(itemId){
        axios(getItemModelConfig("get", {"id": itemId})).then(
            res => {
                console.log("item deleted", res)
                wishlist.item_ids = wishlist.item_ids.filter(item => item !== itemId)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }

    useEffect(() => {
        console.log(wishlist)
    })

    return(
        <div>
            <h1>{wishlist.name}</h1>
            {wishlist && wishlist.item_ids.map((el) => (
                <Item key={el} itemId={el} handleDelete={handleItemDelete}/>
            ))}
        </div>
    )
}

export default Wishlist