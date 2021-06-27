import { useState } from 'react';

const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue);

    const handleChange = ({ target }) => {
        setValues((values) => ({
            ...values,
            [target.name]: target.value
        }))
    };

    const reset = () => {
        setValues(initialValue);
    };

    return {
        values,
        handleChange,
        setValues,
        reset
    }
};

export default useForm;


