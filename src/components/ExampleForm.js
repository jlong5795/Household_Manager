import React, {useState} from 'react';


const ExampleForm = () => {

    const [formState, setFormState] = useState(
        {
            name: '',
            email: ''
        }
    )

    const onChange = (e) => {
        setFormState({
            ...formState, [e.target.name]: e.target.value
        })
    };

    const onSubmit = (e) => {
        e.preventDefault()
        // your logic here
    }



    return (
        <form onSubmit={onSubmit}>
            <input name="name" type='text' onChange={onChange}/>
            <input name='email' type='email' onChange={onChange}/>
            <button type='submit'>Submit</button>
        </form>
    )
};

export default ExampleForm;