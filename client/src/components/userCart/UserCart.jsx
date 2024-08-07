import { useGetCartItems } from "../../hooks/useItems";
import "./userCart.css";
import UserCartItem from "./userCartItem/UserCartItem";

export default function UserCart() {
    const [cartItems] = useGetCartItems();

    return (
        <div className="cart-container">
            <div className="cart-title">My Cart</div>
            <div className="price">price</div>
            <div className="divider" />
            {cartItems.length
                ? cartItems.map(cartItem => <>
                    <UserCartItem key={cartItem._id} title={cartItem.title} price={cartItem.price} image={cartItem.imageUrl} _id={cartItem._id} />
                    <div className="divider" />
                </>)
                : <h1>No cart items</h1>
            }
            <div className="divider" />
            <div className="subtotal">Subtotal: $47.50</div>
        </div>
    );

}