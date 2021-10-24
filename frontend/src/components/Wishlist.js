import {useEffect, useState} from "react";
import Item from "./Item";
import axios from "axios";
import {getItemModelConfig, getWishlistModelConfig} from "../network/RequestTemples";

const Wishlist = ({ wishlistObj }) => {
    const [ wishlist, setWishlist ] = useState(wishlistObj)
    const [ items, setItems ] = useState()

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

    useEffect(() => {
        axios(getItemModelConfig("get", {"wish_list_id": wishlist.id})).then(
            res => {
                console.log(res.data)
                setItems(res.data)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }, [wishlist])

    return(
        <div>
            {wishlist && <h1>{wishlist.name}</h1>}
            <div className="items">
                {items && items.map((el) => (
                    <Item key={el.id} item={el} notifyOnItemDelete={updateWishlist}/>
                ))}
            </div>
        </div>
    )
}

export default Wishlist