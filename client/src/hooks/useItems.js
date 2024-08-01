import { useEffect, useState } from "react";
import itemAPI from "../api/itemAPI";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

// export function useGetAllItems() {
//     const [items, setItems] = useState([]);
//     useEffect(() => {
//         (async () => {
//             const itemData = await itemAPI.getAllItems();

//             setItems(itemData);
//         })();
//     }, []);

//     return [items, setItems];
// }

export function useGetItemsByCategory(category) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        (async () => {
            let itemData = null;
            
            if (category === "all") {
                itemData = await itemAPI.getAllItems();
            } else {
                let categoryLink = "";

                switch (category) {
                    case "clothing":
                        categoryLink = "Clothing"
                        break
                    case "electronics":
                        categoryLink = "Electronics"
                        break
                    case "entertainment":
                        categoryLink = "Entertainment"
                        break
                    case "home-and-garden":
                        categoryLink = "Home%20%26%20Garden"
                        break
                    case "sports":
                        categoryLink = "Sports"
                        break
                }
                
                itemData = await itemAPI.getItemsByCategory(categoryLink);
            }

            setItems(itemData);
        })();
    }, [category]);

    return [items, setItems];
}

export function useGetSingleItem(itemId) {
    const [item, setItem] = useState({});

    useEffect(() => {
        (async () => {
            const itemData = await itemAPI.getSingleItem(itemId)

            setItem(itemData)
        }
        )()
    }
        , [itemId])

    return [item, setItem];
}

export function usePostItem() {
    const postItemHandler = (itemData) => itemAPI.postItem(itemData);

    return postItemHandler;
}

export function useUpdateItem() {
    const updateItemHandler = (itemData, itemId) => itemAPI.updateItem(itemData, itemId);

    return updateItemHandler;
}

export function useDeleteItem() {
    const navigate = useNavigate();

    const deleteItemHandler = (itemId) => {
        if (confirm("Are you sure you wish to delete this Item?")) {
            itemAPI.deleteItem(itemId);

            navigate("/items");
        } else {
            return;
        }
    }

    return deleteItemHandler;
}

export const useIsInCart = (itemId) => {
    const [inCart, setInCart] = useState(false);
    const { userId } = useAuthContext();


    useEffect(() => {
        const checkItemInCart = async (itemId) => {
            const result = await itemAPI.getSingleCartItem(userId, itemId);

            if (result.length) {
                setInCart(true);
            }
        }

        checkItemInCart(itemId);
    }, [inCart])

    return [inCart, setInCart];
}

export function useGetCartItems() {

    const [cartItems, setCartItems] = useState([]);
    const { userId } = useAuthContext();

    useEffect(() => {
        (async () => {
            const itemData = await itemAPI.getCartItems(userId);

            console.log(itemData)

            const cartItems = []

            for (const item of itemData) {
                const cartItem = await itemAPI.getSingleItem(item.item)

                cartItems.push(cartItem)
            }

            setCartItems(cartItems);
        })();
    }, []);

    return [cartItems, setCartItems]
}

export function useAddToCart() {
    const { userId } = useAuthContext();

    const addToCartHandler = async (itemId) => {
        await itemAPI.addToCart(userId, itemId);
    }

    return addToCartHandler;
}