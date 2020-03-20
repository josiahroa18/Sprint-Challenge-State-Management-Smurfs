import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addSmurf } from '../actions/smurfActions';

function SmurfForm(props){
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();

    const onSubmit = data => {
        dispatch(addSmurf(data));
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input
                name='name'
                ref={register()}
            />
            <label>Age</label>
            <input
                name='age'
                ref={register()}
            />
            <label>Height</label>
            <input
                name='height'
                ref={register()}
            />
            <input type='submit'/>
        </form>
    );
}

export default SmurfForm;