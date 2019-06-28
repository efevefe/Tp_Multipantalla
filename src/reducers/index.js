import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer'
import EmployedFormReducer from './EmployedFormReducer'
import EmplyedReducer from './EmployedReducer'
export default combineReducers({
    auth:AuthReducer,
    employedForm:EmployedFormReducer,
    employed:EmplyedReducer
})