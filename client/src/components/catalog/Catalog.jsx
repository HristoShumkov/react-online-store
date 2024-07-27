import { useEffect, useState } from "react";

import ItemPreview from "../itemPreview/ItemPreview";
import itemAPI from "../../api/itemAPI";

import "./catalog.css";

export default function Catalog() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        (async () => {
            const itemData = await itemAPI.getAllItems();

            console.log(itemData)
            setItems(itemData);
        })();
    }, []);


return (
    <div id="catalog-container">
        <h1>Catalog</h1>
        <div id="items-list">
            {items.length
             ? items.map(item =>(
             <ItemPreview key={item._id} title={item.title} price={item.price} image={item.imageUrl}/>
            ))
             : <h1>No Items Yet</h1>
            }
            
        </div>
    </div>
)

}
