import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';

export const ADD_SMURF = 'ADD_SMURFF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURFF_SUCCESS';
export const ADD_SMURF_ERROR = 'ADD_SMURFF_ERROR';

export const REMOVE_SMURF = 'REMOVE_SMURF';
export const REMOVE_SMURF_SUCCESS = 'REMOVE_SMURF_SUCCESS';
export const REMOVE_SMURF_ERROR = 'REMOVE_SMURF_ERROR';

export const EDIT_SMURF = 'EDIT_SMURF';
export const EDIT_SMURF_SUCCESS = 'EDIT_SMURF_SUCCESS';
export const EDIT_SMURF_ERROR = 'EDIT_SMURF_ERROR';

export const getSmurfs = dispatch => {
    dispatch({ type: FETCH_SMURFS });
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_SMURFS_ERROR, payload: err.message });
    })
}

export const addSmurf = smurf => dispatch => {
    dispatch({ type: ADD_SMURF });
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
        dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
        dispatch({ type: ADD_SMURF_ERROR, payload: err.message });
    })
}

export const removeSmurf = smurf => dispatch => {
    dispatch({ type: REMOVE_SMURF });
    axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
    .then(res => {
        dispatch({ type: REMOVE_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
        dispatch({ type: REMOVE_SMURF_ERROR, payload: err.message});
    })
}

export const editSmurf = newSmurf => dispatch => {
    dispatch({ type: EDIT_SMURF });
    console.log(newSmurf)
    axios.put(`http://localhost:3333/smurfs/${newSmurf.id}`, newSmurf)
    .then(res => {
        // console.log(res.data)
        dispatch({ type: EDIT_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
        // console.log('err')
        dispatch({ type: EDIT_SMURF_ERROR, payload: err.message});
    })
}