import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addSmurf } from '../actions/smurfActions';

import './App.css'

function SmurfForm(props){
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data, e) => {
        e.target.reset();
        dispatch(addSmurf(data));
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input
                name='name'
                ref={register({
                    required: true
                })}
            />
            {errors.name && <p>Name required</p>}
            <label>Age</label>
            <input
                name='age'
                ref={register({
                    required: true
                })}
            />
            {errors.age && <p>Age required</p>}
            <label>Height</label>
            <input
                name='height'
                ref={register({
                    required: true
                })}
            />
            {errors.height && <p>Height Required</p>}
            <input type='submit'/>
        </form>
    );
}

export default SmurfForm;