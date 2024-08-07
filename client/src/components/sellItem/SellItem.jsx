import { useState } from "react";
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
    const [errors, setErrors] = useState({
        title: "",
        price: "",
        category: "",
        description: ""
    })
    const postItem = usePostItem();
    const navigate = useNavigate();

    const postItemHandler = async (values) => {
        setErrors({
            title: "",
            price: "",
            category: "",
            description: ""
        })
        let hasError = false;


        if (values.title.length < 3) {
            setErrors(oldState => ({
                ...oldState,
                title: 'Title must be at least 3 characters long',
            }));
            hasError = true;
        }

        if (!values.price) {
            setErrors(oldState => ({
                ...oldState,
                price: 'Please enter a price',
            }));
            hasError = true;
        } else if (!/^\d+(\.\d{1,2})?$/.test(values.price)) {
            setErrors(oldState => ({
                ...oldState,
                price: 'Please enter a valid price',
            }));
            hasError = true;
        }

        if (!values.category) {
            setErrors(oldState => ({
                ...oldState,
                category: 'Please enter a category',
            }));
            hasError = true;
        }

        if (values.description.length < 40) {
            setErrors(oldState => ({
                ...oldState,
                description: 'Description must be at least 40 characters long',
            }));
            hasError = true;
        }


        if (hasError) {
            return;
        }

        try {

            if (!values.imageUrl) {
                values.imageUrl = "/placeholder-image.png";
            };

            const { _id: itemId } = await postItem(values);


            navigate(`/items/view/${itemId}`);
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
                        <input className={errors.title && "error-input"} type="text" id="title" name="title" value={values.title} onChange={changeHandler} />
                        {errors.title && <span className='error-text'>{errors.title}</span>}
                    </div>
                    <label htmlFor="price">Price</label>
                    <div className="input-field">
                        <input className={errors.price && "error-input"} type="number" id="price" name="price" value={values.price} onChange={changeHandler} />
                        {errors.price && <span className='error-text'>{errors.price}</span>}
                    </div>
                    <label htmlFor="category">Category</label>
                    <div className="input-field">
                        <select className={errors.category && "error-input"} id="select-input" name="category" onChange={changeHandler}>
                            <option value="" selected disabled hidden>Choose a category</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Home & Garden">Home & Garden</option>
                            <option value="Sports">Sports</option>
                        </select>
                        {errors.category && <span className='error-text'>{errors.category}</span>}
                    </div>
                    <label htmlFor="description">Item Description</label>
                    <div className="input-field">
                        <input className={errors.description && "error-input"} type="text" id="description" name="description" value={values.description} onChange={changeHandler} />
                        {errors.description && <span className='error-text'>{errors.description}</span>}
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
