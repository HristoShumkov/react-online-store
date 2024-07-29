import { Link, useParams } from "react-router-dom"

import { useDeleteItem, useGetSingleItem } from "../../hooks/useItems";

import "./itemDetails.css"

export default function ItemDetails() {
    const { itemId } = useParams();
    const [item] = useGetSingleItem(itemId);

    const deleteItem = useDeleteItem();

    return (
        <>
            <img src={item.imageUrl} />
            <h1>{item.title}</h1>
            <p>{item.category}</p>
            <p>{item.price}$</p>
            <p>{item.description}</p>
            <div>
                <button onClick={async () => await deleteItem(itemId)} className="button-secondary">Delete</button>
                <Link to={`/edit/${itemId}`} className="button-main">Edit</Link>
            </div>
        </>
    )

}