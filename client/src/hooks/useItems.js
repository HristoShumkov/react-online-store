import { useEffect, useState } from "react";
import itemAPI from "../api/itemAPI";
import { useNavigate } from "react-router-dom";

export function useGetAllItems() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        (async () => {
            const itemData = await itemAPI.getAllItems();

            setItems(itemData);
        })();
    }, []);

    return [items, setItems]
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

            navigate("/items")
        } else {
            return
        }
    }

    return deleteItemHandler;
}