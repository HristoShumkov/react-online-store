import { useEffect, useState } from "react";
import { useGetCartItems } from "../../hooks/useItems";
import "./userCart.css";
import UserCartItem from "./userCartItem/UserCartItem";

export default function UserCart() {
    const [cartItems, setCartItems] = useGetCartItems();
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        updateSubtotal(cartItems);
    }, [cartItems]);

    const handleCheckboxChange = (id, checked) => {
        const updatedItems = cartItems.map(item => {
            if (item._id === id) {
                item.checked = checked;
            }
            return item;
        });
        updateSubtotal(updatedItems);
    };

    const removeItemHandler = (id) => {
        const updatedItems = cartItems.filter(item => item._id !== id);
        setCartItems(updatedItems);
        updateSubtotal(updatedItems);
    };

    const updateSubtotal = (items) => {
        const newSubtotal = items.reduce((acc, item) => {
            return item.checked ? acc + item.price : acc;
        }, 0);
        setSubtotal(newSubtotal);
    }

    return (
        <div className="cart-container">
            <div className="cart-title">My Cart</div>
            <div className="price">price</div>
            <div className="divider" />
            {cartItems.length
                ? cartItems.map(cartItem => <>
                    <UserCartItem
                        key={cartItem._id}
                        title={cartItem.title}
                        price={cartItem.price}
                        image={cartItem.imageUrl}
                        _id={cartItem._id}
                        checked={cartItem.checked || false}
                        onCheckboxChange={handleCheckboxChange}
                        onRemoveItem={removeItemHandler}
                    />
                    <div className="divider" key={`divider${cartItem._id}`} />
                </>)
                : <h1>No cart items</h1>
            }
            <div className="divider" />
            <div className="subtotal">Subtotal: ${subtotal}</div>
        </div>
    );

}