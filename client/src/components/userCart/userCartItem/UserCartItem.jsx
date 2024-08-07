import "./userCartItem.css"

export default function UserCartItem({title, price, image, _id}) {
    return (
        <div className="cart-item">
            <input type="checkbox" />
            <img src={image} alt="Item" className="cart-item-image" />
            <div className="cart-item-title">{title}</div>
            <div className="cart-item-actions">
                <button className="button-main">Remove</button>
            </div>
            <div className="cart-item-price">${price}</div>
        </div>
    )
}