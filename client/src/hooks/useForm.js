import { useEffect, useState } from "react";

export function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }; 

    const submitHandler = (e) => {
        e.preventDefault();

        submitCallback(values);
    }

    const populateForm = (data) => {
        useEffect(() => {
            setValues({ ...data })
        }, [data])
    }
    

    return {
        values,
        changeHandler,
        submitHandler,
        setValues,
        populateForm
    };
}