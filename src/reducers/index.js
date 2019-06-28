import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer'
import EmployedFormReducer from './EmployedFormReducer'
export default combineReducers({
    auth:AuthReducer,
    employedForm:EmployedFormReducer
})