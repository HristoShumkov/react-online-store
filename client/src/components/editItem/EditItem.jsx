import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useGetSingleItem, useUpdateItem } from "../../hooks/useItems";
import { useForm } from "../../hooks/useForm";


export default function EditItem() {
    const [errors, setErrors] = useState({
        title: "",
        price: "",
        category: "",
        description: ""
    })
    const { itemId } = useParams();
    const [item] = useGetSingleItem(itemId);

    const updateItem = useUpdateItem();
    const navigate = useNavigate();

    const updateItemHandler = async (values) => {
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

            await updateItem(values, itemId);

            navigate(`/items/view/${itemId}`);
        } catch (err) {
            console.error(err.message)
        }
    }

    const { values, changeHandler, submitHandler, populateForm } = useForm(item, updateItemHandler);

    populateForm(item)

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
                        <input className={errors.price && "error-input"} type="number" step="any" id="price" name="price" value={values.price} onChange={changeHandler} />
                        {errors.price && <span className='error-text'>{errors.price}</span>}
                    </div>
                    <label htmlFor="category">Category</label>
                    <div className="input-field">
                        <select className={errors.category && "error-input"} id="select-input" name="category" value={values.category} onChange={changeHandler}>
                            {errors.category && <span className='error-text'>{errors.category}</span>}
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
                        <input className={errors.description && "error-input"} type="text" id="description" name="description" value={values.description} onChange={changeHandler} />
                        {errors.description && <span className='error-text'>{errors.description}</span>}
                    </div>
                    <label htmlFor="imageUrl">Photo of Item</label>
                    <div className="input-field">
                        <input type="text" id="image-url" name="imageUrl" value={values.imageUrl} onChange={changeHandler} />
                    </div>
                    <div id="button-container" style={{ display: "flex" }}>
                        <input type="submit" value="Submit" className="button-main button-submit" />
                        <Link to={`/items/view/${itemId}`} className="button-secondary button-submit">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    )

}
