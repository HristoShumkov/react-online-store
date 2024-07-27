import useGetAllItems from "../../hooks/useItems";
import ItemPreview from "../itemPreview/ItemPreview";

import "./catalog.css";

export default function Catalog() {
    const [items] = useGetAllItems();

return (
    <div id="catalog-container">
        <h1>Catalog</h1>
        <div id="items-list">
            {items.length
             ? items.map(item =>(
             <ItemPreview key={item._id} title={item.title} price={item.price} image={item.imageUrl} _id={item._id}/>
            ))
             : <h1>No Items Yet</h1>
            }
            
        </div>
    </div>
)

}
