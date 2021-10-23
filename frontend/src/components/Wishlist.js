import {useEffect, useState} from "react";
import Item from "./Item";
import axios from "axios";
import {getItemModelConfig} from "../network/RequestTemples";

const Wishlist = ({ wishlistObj }) => {
    const [items, setItems] = useState()
    // useEffect(() => {
    //     axios(getItemModelConfig("get", ))
    // })

    return(
        <div>
            <h1>{wishlistObj.name}</h1>
            {/*{items && items.map((el) => <Item key={el.id} item = {el}/>)}*/}
        </div>
    )
}

export default Wishlist