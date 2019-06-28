import firebase from 'firebase'
import { EMAIL_CHANGED,
        PASSWORD_CHANGED,  
        ON_LOGIN,
        ON_LOGIN_SUCCESS,
        ON_LOGIN_FAIL} from './types';
import {Actions} from 'react-native-router-flux'

export const emailChange = (text) => {
    return{
        type:EMAIL_CHANGED,
        payload:text

    }
}

export const passwordChange = (text) => {
    return{
        type:PASSWORD_CHANGED,
        payload:text

    }
}

export const loginUser = ({email,password}) => {
    return(dispatch) =>{
    dispatch({
        type: ON_LOGIN 
        })    
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(user => login(dispatch,user)
        )
    .catch( ()=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(user => login(dispatch,user)
       )
       .catch(user => login_fail(dispatch,user))
    })
    }

}
const login_fail = (dispatch,user) =>{
    dispatch({
    type:ON_LOGIN_FAIL ,payload:user
})}
const login = (dispatch,user) =>{
    dispatch({
    type:ON_LOGIN_SUCCESS ,payload:user
    })
    Actions.employed()
}
