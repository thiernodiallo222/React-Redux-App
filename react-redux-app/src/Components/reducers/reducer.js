import react from 'react';
import { FECTCHING_START, FETCHING_SUCCESS, FETCHING_FAIL } from '../../Actions/index';
import { initialState } from '../../Actions/index';


const reducer = (state = initialState, action) =>{
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: ''
      };
    case FETCHING_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;