import {swapi} from '../../services/api';
import {GET_PERSONAGENS, error, ERROR} from '../types';


export const getPersonagens  = () => (dispatch) => {
    swapi(sucess =>{
        const {results} = sucess.data
        if (results){

          //ordenado array
          results.sort(function(a,b) {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
          });

          dispatch({
            type: GET_PERSONAGENS,
            payload: results
          });
        }
    },
    error =>{
      console.log('ERROR-----', error)
      dispatch({
        type: ERROR
      });
     }
    )
  };
  export const deletePersonagens  = name => (dispatch, getState) => {
   
    var personagensList  = [...getState().personagens.listPersonagens];

    dispatch({
      type: GET_PERSONAGENS,
      payload: personagensList.filter(item => item.name !== name)
    });
  
  }