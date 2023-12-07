import {combineReducers} from 'redux'
import errorReducer from './errorReducer';
import walletReducer from './walletReducer';

export default combineReducers({
    error:errorReducer,
    wallet: walletReducer
});