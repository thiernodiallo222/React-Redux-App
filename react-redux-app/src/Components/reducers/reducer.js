import react from 'react';
import { FECTCH_DATA } from '../../Actions/actionCreators';
import { initialState } from '../../Actions/actionCreators';


const reducer = (state = initialState, action) =>{
  switch (action.type) {
    case FECTCH_DATA:
          return {

          }
    
    default:
      return initialState;
  }
};

export default reducer;