import React from "react";
import { textFields } from "../components/Modals/orderModal.data";

export default function useForm(initialFormValues) {
    const [values, setValues] = React.useState({
        ...initialFormValues,
        isSubmitting: false,
        formSubmitted: false,
    });
    const [errors, setErrors] = React.useState({});
    const validate = (fieldValues = values) => {
        let result = { ...errors };
        for (const [key, value] of Object.entries(fieldValues)) {
            value === "" ? result[key] = "Заполните это поле" : result[key] = "";
        }
        setErrors({ ...result })
    };
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setValues({
            ...values,
            [name]: value
        });
        if (target.required) validate({ [name]: value });
    }
    const formIsValid = (fieldValues = values) => {
        const fields = {};

        for (const { name, required } of Object.values(textFields)) {
            if (required) fields[name] = fieldValues[name];
        }

        return Object.values(fields).every((x) => x !== "") &&
            Object.values(errors).every((x) => x === "");
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = { ...values };

        new Promise((resolve, reject) => {
            setValues({...values, isSubmitting: true})
            setTimeout(() => {
                resolve(`Model: ${formData.model}\nName: ${formData.name}\n`);
            }, 2000);
        }).then((result) => {
            setValues({
                ...initialFormValues,
                isSubmitting: false,
                formSubmitted: true,
            });
            event.target.reset();
            console.log(formData);
        }).catch(error => console.log(error));
    }

    return {
        values,
        errors,
        handleInputChange,
        handleSubmit,
        formIsValid
    }
}