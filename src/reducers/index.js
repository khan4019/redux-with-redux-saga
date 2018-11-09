import {combineReducers} from 'redux'; 
import productReducers from './productReducers';
import asyncReducers from './asyncReducers';

const rootReducers = combineReducers({
    cart:productReducers,
    products:asyncReducers
})

export default rootReducers;