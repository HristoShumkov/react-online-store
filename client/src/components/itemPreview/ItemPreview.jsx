import { Link } from "react-router-dom";

import "./itemPreview.css";

export default function ItemPreview({title, price, image, _id}) {

    return (
        <Link to={`/items/view/${_id}`} id="item-container">
            <img src={image} id="item-img" />
            <p id="item-name">{title}</p>
            <p id="item-price">${price}</p>
        </Link>
    )
}


