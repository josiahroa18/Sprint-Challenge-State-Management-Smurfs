import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';

export const getSmurfs = dispatch => {
    dispatch({ type: FETCH_SMURFS });
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res.data);
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_SMURFS_ERROR, payload: err });
    })
}