import { Link, useParams } from "react-router-dom";
import { useGetItemsByCategory } from "../../hooks/useItems";
import ItemPreview from "../itemPreview/ItemPreview";

import "./itemCatalog.css";

export default function ItemCatalog() {
    const { category } = useParams();
    const [items] = useGetItemsByCategory(category);

    return (
        <div id="catalog-container">
            <h1>Items</h1>
            <div style={{ display: "flex" }}>
                <Link to="/items/clothing" className="button-secondary">Clothing</Link>
                <Link to="/items/electronics" className="button-secondary">Electronics</Link>
                <Link to="/items/entertainment" className="button-secondary">Entertainment</Link>
                <Link to="/items/home-and-garden" className="button-secondary">Home & Garden</Link>
                <Link to="/items/sports" className="button-secondary">Sports</Link>
                <Link to="/items/all" className="button-secondary">All</Link>
            </div>
            <div className="divider" />
            <div id="items-list">
                {items.length
                    ? items.map(item => (
                        <ItemPreview key={item._id} title={item.title} price={item.price} image={item.imageUrl} _id={item._id} />
                    ))
                    : <h1>No Items Yet</h1>
                }
            </div>
        </div>
    )

}
