import { Link, useParams } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { useAddToCart, useDeleteItem, useGetSingleItem, useIsInCart } from "../../hooks/useItems";
import { useAuthContext } from "../../contexts/AuthContext";

import "./itemDetails.css"

export default function ItemDetails() {
    const { itemId } = useParams();
    const [item] = useGetSingleItem(itemId);
    const { isItemOwner, isAuthenticated } = useAuthContext();

    const deleteItem = useDeleteItem();
    const addToCart = useAddToCart();

    const [isInCart, setIsInCart] = useIsInCart(itemId);

    return (
        <>
            <img src={item.imageUrl} />
            <h1>{item.title}</h1>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p>{item.description}</p>
            {isAuthenticated && (
                <div>
                    {isItemOwner(itemId) ? (
                        <>
                            <button onClick={async () => await deleteItem(itemId)} className="button-secondary">Delete</button>
                            <Link to={`/edit/${itemId}`} className="button-main">Edit</Link>
                        </>
                    ) : (
                        isInCart 
                            ? <Link to="/my-cart" className="button-secondary">Check Item in Cart</Link>
                            : <button className="button-secondary" onClick={() => {
                                addToCart(itemId);
                                setIsInCart(true);
                            }}><FaShoppingCart /> Add to Cart</button>
                    )}
                </div>
            )}
        </>
    )

}