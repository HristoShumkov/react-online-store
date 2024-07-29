import { useNavigate } from "react-router-dom";
import { usePostItem } from "../../hooks/useItems";
import { useForm } from "../../hooks/useForm";

import "./sellItem.css";

const initialValues = {
    title: "",
    price: "",
    category: "",
    description: "",
    imageUrl: "",
}

export default function SellItem() {
    const postItem = usePostItem();
    const navigate = useNavigate();

    const postItemHandler = async (values) => {
        try {
            await postItem(values);

            navigate("/catalog"); 1
        } catch (err) {
            console.error(err.message)
        }
    }

    const { values, changeHandler, submitHandler } = useForm(initialValues, postItemHandler);

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
                        <select id="select-input" name="category" onChange={changeHandler}>
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
                    <input type="submit" value="Submit" className="button-main button-submit" />
                </form>
            </div>
        </div>
    )

}
