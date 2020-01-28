import {SET_TEXT_INPUT, GET_TEXT_COUNT} from '../types';
  
  const initialState = {
    textInput: '',
    countValues: '',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_TEXT_INPUT:
        return {
          ...state,
          textInput: action.payload
        };
        case GET_TEXT_COUNT:
          return {
            ...state,
            countValues: action.payload,
          };
      default:
        return state;
    }
  };
  export default reducer;
  