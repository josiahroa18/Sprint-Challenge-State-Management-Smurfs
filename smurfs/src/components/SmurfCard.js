import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeSmurf, editSmurf } from '../actions/smurfActions';
import { useForm } from 'react-hook-form';
import './App.css'

function SmurfCard({smurf}){
    const dispatch = useDispatch();
    const [ edit, setEdit ] = useState(false);

    const {register, handleSubmit } = useForm({
        defaultValues: smurf
    });

    const remove = () => {
        dispatch(removeSmurf(smurf));
    }

    const editItem = () => {
        setEdit(true);
    }

    const cancelEdit = () => {
        setEdit(false);
    }

    const onSubmit = (data, e) => {
        e.target.reset();
        dispatch(editSmurf({...data, id: smurf.id}));
        setEdit(false);
    }

    return (
        <div className='smurf-card'>
            {edit && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Name</label>
                    <input
                        name='name'
                        ref={register({
                            required: true
                        })}
                    />
                    <label>Age</label>
                    <input
                        name='age'
                        ref={register({
                            required: true
                        })}
                    />
                    <label>Height</label>
                    <input
                        name='height'
                        ref={register({
                            required: true
                        })}
                    />
                    <div className='button-container'>
                    <input className='submit' type='submit'/>
                    <button onClick={cancelEdit}>Cancel</button>
                    </div>
                    
                </form>
            )}
            {!edit && (
                <>
                    <h3>{smurf.name}</h3>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
                    <div className='button-container'>
                        <button className='edit' onClick={editItem}>Edit</button>
                        <button className='remove' onClick={remove}>Remove</button>
                    </div>
                </>
            )}
            

        </div>
    );
}

export default SmurfCard;