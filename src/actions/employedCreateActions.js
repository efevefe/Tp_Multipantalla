import firebase from 'firebase'
import {EMPLOYED_UPDATE , EMPLOYED_CREATED,EMPLOYED_FETCH_SUCCESS} from './types'
import {Actions} from 'react-native-router-flux'

export const employedUpdate = ({prop,value}) => {
    return{
        type:EMPLOYED_UPDATE,
        payload:{prop,value}

    }
}

export const employedCreate = ({name,surname,legajo}) =>{
    const {currentUser} = firebase.auth();
    return(dispatch)=>{
        firebase.database().ref(`/user/${currentUser.uid}/employees`)
        .push({name,surname,legajo})
        .then(()=>dispatch({
            type:EMPLOYED_CREATED
        }),
        Actions.pop()
        )
        .catch(error => console.log(error))
        ;
    
}}

export const employedFetch = () => {
    const {currentUser} = firebase.auth();
    return(dispatch)=>{
    firebase.database().ref(`/user/${currentUser.uid}/employees`)
    .on('value', snapshot =>{
        dispatch({type:EMPLOYED_FETCH_SUCCESS , payload:snapshot.val()})
    })
}}

