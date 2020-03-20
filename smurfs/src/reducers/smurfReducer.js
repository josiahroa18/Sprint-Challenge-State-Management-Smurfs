import { 
    FETCH_SMURFS, 
    FETCH_SMURFS_SUCCESS, 
    FETCH_SMURFS_ERROR, 
    ADD_SMURF, 
    ADD_SMURF_SUCCESS, 
    ADD_SMURF_ERROR,
    REMOVE_SMURF,
    REMOVE_SMURF_SUCCESS,
    REMOVE_SMURF_ERROR,
    EDIT_SMURF,
    EDIT_SMURF_SUCCESS,
    EDIT_SMURF_ERROR 
} from '../actions/smurfActions';

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
                smurfs: [...action.payload],
                error: '',
                isFetching: false
            }
        case FETCH_SMURFS_ERROR:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case ADD_SMURF:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case ADD_SMURF_SUCCESS:
            console.log(action.payload)
            return {
                smurfs: [...action.payload],
                error: '',
                isFetching: false
            }
        case ADD_SMURF_ERROR:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case REMOVE_SMURF:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case REMOVE_SMURF_SUCCESS:
            return {
                smurfs: [...action.payload],
                error: '',
                isFetching: false
            }
        case REMOVE_SMURF_ERROR:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case EDIT_SMURF:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case EDIT_SMURF_SUCCESS:
            return {
                smurfs: [...action.payload],
                error: '',
                isFetching: false
            }
        case EDIT_SMURF_ERROR:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}