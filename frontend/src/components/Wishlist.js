import {useEffect, useState} from "react";
import Item from "./Item";
import axios from "axios";
import {getItemModelConfig} from "../network/RequestTemples";

const Wishlist = ({ wishlistObj }) => {

    const [ wishlist, setWishlist ] = useState(wishlistObj)

    function updateWishlist(){
        console.log("updating wishlist")

        axios(getItemModelConfig("get", {"id": wishlist.id})).then(
            res => {
                console.log("update wishlist", res)
                setWishlist(res.data[0])
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }

    function handleItemDelete(itemId){
        console.log("handle delete")
        axios(getItemModelConfig("delete", {"id": itemId})).then(
            res => {
                console.log("item deleted", res)
                // setItemIds(itemIds.filter(item => item !== itemId))
                updateWishlist()
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }

    useEffect(() => {
        updateWishlist()
    })

    return(
        <div>
            {wishlist && <h1>{wishlist.name}</h1>}
            {wishlist && wishlist.item_ids.map((el) => (
                <Item key={el} itemId={el} handleDelete={handleItemDelete}/>
            ))}
        </div>
    )
}

export default Wishlist