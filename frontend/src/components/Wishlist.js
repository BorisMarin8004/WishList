import {useEffect, useState} from "react";
import Item from "./Item";
import axios from "axios";
import {getItemModelConfig, getWishlistModelConfig} from "../network/RequestTemples";

const Wishlist = ({ wishlistObj }) => {

    const [ wishlist, setWishlist ] = useState(wishlistObj)

    function updateWishlist(){
        axios(getWishlistModelConfig("get", {"id": wishlist.id})).then(
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

    // useEffect(() => {
    //     updateWishlist()
    // })

    return(
        <div>
            {wishlist && <h1>{wishlist.name}</h1>}
            {wishlist && wishlist.item_ids.map((el) => (
                <Item key={el} itemId={el} notifyOnItemDelete={updateWishlist}/>
            ))}
        </div>
    )
}

export default Wishlist