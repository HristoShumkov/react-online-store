import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetSingleItem, useUpdateItem } from "../../hooks/useItems";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";


export default function EditItem() {
    const { itemId } = useParams();
    const [item] = useGetSingleItem(itemId);

    const updateItem = useUpdateItem();
    const navigate = useNavigate();

    const updateItemHandler = async (values) => {
        try {
            await updateItem(values, itemId);

            navigate(`/items/${itemId}`); 1
        } catch (err) {
            console.error(err.message)
        }
    }

    const { values, changeHandler, submitHandler, populateForm } = useForm(item, updateItemHandler);

    populateForm(item);

    return (
        <div className="flex-center">
            <div className="container-default">
                <h1 style={{ textAlign: "center", marginTop: 0 }}>Sell Item</h1>
                <form method="POST" onSubmit={submitHandler}>
                    <label htmlFor="title">Title</label>
                    <div className="input-field">
                        <input type="text" id="title" name="title" value={values.title} onChange={changeHandler} />
                    </div>
                    <label htmlFor="price">Price</label>
                    <div className="input-field">
                        <input type="text" id="price" name="price" value={values.price} onChange={changeHandler} />
                    </div>
                    <label htmlFor="category">Category</label>
                    <div className="input-field">
                        <select id="select-input" name="category" value={values.category} onChange={changeHandler}>
                            <option value="" selected disabled hidden>Choose a category</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Home & Garden">Home & Garden</option>
                            <option value="Sports">Sports</option>
                        </select>
                    </div>
                    <label htmlFor="description">Item Description</label>
                    <div className="input-field">
                        <input type="text" id="description" name="description" value={values.description} onChange={changeHandler} />
                    </div>
                    <label htmlFor="imageUrl">Photo of Item</label>
                    <div className="input-field">
                        <input type="text" id="image-url" name="imageUrl" value={values.imageUrl} onChange={changeHandler} />
                    </div>
                    <div id="button-container" style={{display: "flex"}}>
                        <input type="submit" value="Submit" className="button-main button-submit" />
                        <Link to={`/items/${itemId}`} className="button-secondary button-submit">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    )

}
