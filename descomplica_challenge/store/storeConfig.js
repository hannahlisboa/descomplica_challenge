import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import PalavrasReduce from './reduces/palavras';


const reducers = combineReducers({
    palavras: PalavrasReduce
});

const storeConfig = () => createStore(reducers, compose(applyMiddleware(thunk)));

export default storeConfig;
