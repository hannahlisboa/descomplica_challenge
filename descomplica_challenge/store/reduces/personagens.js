import {GET_PERSONAGENS, ERROR} from '../types';
  
  const initialState = {
    listPersonagens: [],
    isFetching: true,
    error: false
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PERSONAGENS:
        return {
          ...state,
          isFetching: false,
          error: false,
          listPersonagens: action.payload
        };
        case ERROR:
          return {
            ...state,
            error: true,
          };
      default:
        return state;
    }
  };
  export default reducer;
  