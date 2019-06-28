import {EMAIL_CHANGED,PASSWORD_CHANGED,ON_LOGIN_SUCCESS,ON_LOGIN_FAIL,ON_LOGIN} from '../actions/types'
const INITISAL_STATE={
    email:'',
    password:'',
    error:'',
    loading:false,
    user:null
    

}

export default (state= INITISAL_STATE,action) => {
    switch(action.type){
        case EMAIL_CHANGED:
            return {...state, email:action.payload};
        case PASSWORD_CHANGED:
            return {...state, password:action.payload};
        case ON_LOGIN:
            return{...state,loading:true,}
        case ON_LOGIN_SUCCESS:
            return {...state, user: action.payload , loading:false}
        case ON_LOGIN_FAIL:
            return{...state , error:'Authentication Failed' , password:'' , loading:false}
        default:
            return state;
    }
}