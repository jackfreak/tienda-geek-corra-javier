/**
 * useForm hook.
 *
 * @author Javier Alejandro Corra
 */

import { useState } from "react";


const useForm = (initalFormData = {}) => {
    const [formData, setFormData] = useState(initalFormData);

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleResetForm = () => {
        setFormData(initalFormData);
    };

    return {
        formData,
        handleInputChange,
        handleResetForm,
    };
};


export {
    useForm
}
