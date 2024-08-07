import { Link, useNavigate, useParams } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { useAddToCart, useDeleteItem, useGetSingleItem, useIsInCart } from "../../hooks/useItems";
import { useAuthContext } from "../../contexts/AuthContext";

import "./itemDetails.css"

export default function ItemDetails() {
    const { itemId } = useParams();
    const [item] = useGetSingleItem(itemId);
    const { isOwner, isAuthenticated } = useAuthContext();
    const navigate = useNavigate();

    const deleteItem = useDeleteItem();
    const addToCart = useAddToCart();

    const [isInCart, setIsInCart] = useIsInCart(itemId);

    return (
        <div id="item-details">
            <div className="container-half">
                <button className="button-secondary" onClick={() => navigate(-1)}>Back</button>
                <div id="image-container">
                    <img src={item.imageUrl} alt={item.title} id="item-image" />
                </div>
                <h1 id="item-title">{item.title}</h1>
            </div>
            <div className="container-half">
                <p id="item-category">Category: {item.category}</p>
                <p id="item-price">${item.price}</p>
                {isAuthenticated && (
                    <div id="button-container">
                        {isOwner(item._ownerId) ? (
                            <>
                                <button onClick={async () => await deleteItem(item._id)} className="button-secondary">Delete</button>
                                <Link to={`/edit/${item._id}`} className="button-main">Edit</Link>
                            </>
                        ) : (
                            isInCart
                                ? <Link to="/my-cart" className="button-secondary">Check Item in Cart</Link>
                                : <button className="button-secondary" onClick={() => {
                                    addToCart(item._id);
                                    setIsInCart(true);
                                }}><FaShoppingCart /> Add to Cart</button>
                        )}
                    </div>
                )}
                <div className="divider"></div>
                <p id="item-description">{item.description}</p>
            </div>
        </div>
    )

}