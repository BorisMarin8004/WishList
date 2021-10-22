
const Wishlist = ({ wishlistObj }) => {
    return(
        <div>
            <h1>{wishlistObj.name}</h1>
            <h1>{wishlistObj.user_id}</h1>
            <h1>{wishlistObj.item_ids}</h1>
        </div>
    )
}

export default Wishlist