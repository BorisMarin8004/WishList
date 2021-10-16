import React from 'react'
import Button from '../components/Button'
import '../css/Home.css'
import tree from '../images/tree.png'

function Home() {
    //TODO: rig button when add item page is made.
    const btnAddItemClick = () => {
        console.log("add item clicked")
    }

    //TODO: rig button when wishlist page is made.
    const btnWishlistClick = () => {
        console.log("wish list clicked")
    }
    return (
        <div>
            <h1>Have you been nice this year?</h1>
            <h4>Help Santa (and your friends and family) get you what you really want this year with a wishlist.</h4>
            <div className="sections">
                <img src={tree} alt="Image of Christmas Tree" />
                <div className="questions">
                    <div>
                        <p className="questionText">Found an item? Add it now so you don't forget later!</p>
                        <Button text="Add an item" color="green" onClick={btnAddItemClick}/>
                    </div>
                    <div>
                        <p className="questionText">Already added all your items? See your wishlist here.</p>
                        <Button text="View My Wishlist" color="orange" onClick={btnWishlistClick}/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
