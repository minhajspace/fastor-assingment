import { signupReducer } from './signupReducer';
import { combineReducers } from 'redux'
import { loginReducer } from './loginReducer';

export default combineReducers({
    signupReducer,
    loginReducer
});