import { useParams } from "react-router-dom"

import { useGetSingleItem } from "../../hooks/useItems";

export default function ItemDetails() {
    const { itemId } = useParams();
    const [item] = useGetSingleItem(itemId);

    return (
        <>
            <img src={item.imageUrl} />
            <h1>{item.title}</h1>
            <p>{item.category}</p>
            <p>{item.price}$</p>
            <p>{item.description}</p>
        </>
    )

}