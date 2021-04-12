import {useState} from 'react'

export const useForm = (initialState = {}) => {
    const [values, setvalues] = useState(initialState);

    const reset = () =>{
        setvalues(initialState)
    }

    const handleInputChange = (e) =>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setvalues({
            ...values,
            [name]: value
        })
    }

    return [values,handleInputChange,reset,setvalues]
}
