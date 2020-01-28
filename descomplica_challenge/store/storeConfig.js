import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const reducers = combineReducers({

});

const storeConfig = () => createStore(reducers, compose(applyMiddleware(thunk)));

export default storeConfig;
