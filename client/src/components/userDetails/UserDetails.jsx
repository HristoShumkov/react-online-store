import { useGetUserDetails } from "../../hooks/useAuth";
import { parseDate } from "../../utils/authUtils";
import { useAuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useGetCartItems, useGetSingleItem } from "../../hooks/useItems";
import ItemPreview from "../itemPreview/ItemPreview";

import "./userDetails.css";

export default function UserDetails() {
    const userDetails = useGetUserDetails();
    const { createdOn } = useAuthContext();

    const [cartItems] = useGetCartItems();

    return (

        <div id="user-details-container">
            <div id="user-info">
                <img src={userDetails.profilePic} id="user-details-profile-pic" />
                <h1>{userDetails.username}</h1>
                <h1>Created on: {parseDate(createdOn)}</h1>
            </div>
            <div id="user-cart-container">
            <div id='user-cart-header'>
                <h2>My Cart</h2>
                <Link to='/my-cart' id='view-more'>View more</Link>
            </div>
            <div id='user-cart'>
                {cartItems.length
                    ? cartItems.map(cartItem => (
                        <>
                            <ItemPreview key={cartItem._id} title={cartItem.title} price={cartItem.price} image={cartItem.imageUrl} _id={cartItem._id} />
                        </>
                    ))
                    : <p id="no-items">No Items Yet</p>
                }
            </div>
            </div>
        </div>
    )

}