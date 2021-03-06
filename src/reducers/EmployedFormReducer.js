import {EMPLOYED_UPDATE,EMPLOYED_CREATED,ON_LOGIN} from '../actions/types'

const INITIAL_STATE= {
    name:'',
    surname:'',
    legajo:'',
}
export default (state= INITIAL_STATE,action)=> {
    switch(action.type) {
        
        case EMPLOYED_UPDATE:
            return{...state,[action.payload.prop]:action.payload.value }
        case EMPLOYED_CREATED:
            return{INITIAL_STATE}
        case ON_LOGIN:
            return {...state}
        default:
            return state
}}