import {useEffect, useState} from "react";
import Item from "./Item";
import axios from "axios";
import {getItemModelConfig} from "../network/RequestTemples";

const Wishlist = ({ wishlistObj }) => {
    return(
        <div>
            <h1>{wishlistObj.name}</h1>
            {wishlistObj.item_ids && wishlistObj.item_ids.map((el) => <Item key={el.id} item = { el.id }/>)}
        </div>
    )
}

export default Wishlist