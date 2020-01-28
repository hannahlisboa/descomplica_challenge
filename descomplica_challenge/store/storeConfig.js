import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import PalavrasReduce from './reduces/palavras';
import personagensReduce from './reduces/personagens';


const reducers = combineReducers({
    palavras: PalavrasReduce,
    personagens: personagensReduce
});

const storeConfig = () => createStore(reducers, compose(applyMiddleware(thunk)));

export default storeConfig;
