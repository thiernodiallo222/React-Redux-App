import react from 'react';
import { FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILURE } from '../../Actions/index';


const initialState = {
  data: [],
  error: '',
  isFetching: false
};

const reducer = (state = initialState, action) =>{
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        isFetching: action.payload,
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        data: [ ...state.data, action.payload],
        isFetching: false,
      };
    case FETCHING_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;