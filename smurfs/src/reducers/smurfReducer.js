import { FETCH_SMURFS, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_ERROR } from '../actions/smurfActions';

const intialState = {
    smurfs: [],
    error: '',
    isFetching: false
}

export const smurfReducer = (state = intialState, action) => {
    switch(action.type){
        case FETCH_SMURFS:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                smurfs: [...state.smurfs, ...action.payload],
                error: '',
                isFetching: false
            }
        case FETCH_SMURFS_ERROR:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}