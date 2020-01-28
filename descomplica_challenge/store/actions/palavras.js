import {SET_TEXT_INPUT, GET_TEXT_COUNT} from '../types';
  
export const setTextInput  = text => (dispatch) => {
    dispatch({
        type: SET_TEXT_INPUT,
        payload: text
      });

      const splited = text.replace(/[.#,?]/g, '').replace(/\s?$/,'').toLowerCase().split(' ');
    
      var counts = {};
      splited.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
      text = JSON.stringify(counts).replace(/[{}"]/g, '').replace(/[,]/g, '\n');

      dispatch({
        type: GET_TEXT_COUNT,
        payload: text
      });
  }