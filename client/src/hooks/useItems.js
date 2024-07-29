import { useEffect, useState } from "react";
import itemAPI from "../api/itemAPI";

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