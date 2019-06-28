import firebase from 'firebase'
import {EMPLOYED_UPDATE , EMPLOYED_CREATED,ON_LOGIN} from './types'
import {Actions} from 'react-native-router-flux'

export const employedUpdate = ({prop,value}) => {
    return{
        type:EMPLOYED_UPDATE,
        payload:{prop,value}

    }
}

export const employedCreate = ({name,surname,phone}) =>{
    const {currentUser} = firebase.auth();
    return(dispatch)=>{
        dispatch({
        type:ON_LOGIN
        })
        firebase.database().ref(`/user/${currentUser.uid}/employees`)
        .push({name,surname,phone})
        .then(()=>dispatch({
            type:EMPLOYED_CREATED
        }),
        Actions.pop()
        )
        .catch(error => console.log(error))
        ;
    
}}

