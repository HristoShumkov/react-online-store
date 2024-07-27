import { useEffect, useState } from "react";
import itemAPI from "../api/itemAPI";

export default function useGetAllItems() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        (async () => {
            const itemData = await itemAPI.getAllItems();

            setItems(itemData);
        })();
    }, []);

    return [items, setItems]
}

export default function useGetSingleItem(itemId) {
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