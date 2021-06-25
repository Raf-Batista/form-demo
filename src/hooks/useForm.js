import { useState } from 'react';

const useForm = (initialValue, callback) => {
    const [values, setValues] = useState(initialValue);

    const handleChange = ({ target }: any) => {
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
        setValues
    }
};

export default useForm;


