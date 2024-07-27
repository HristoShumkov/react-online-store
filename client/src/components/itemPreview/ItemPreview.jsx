import "./itemPreview.css";

export default function ItemPreview({title, price, image}) {

    return (
        <div id="item-container">
            <img src={image} id="item-img" />
            <p id="item-name">{title}</p>
            <p id="item-price">${price}</p>
        </div>
    )
}


