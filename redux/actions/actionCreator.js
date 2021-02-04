import { DELETE_USER, SET_USER } from "./constants"


export const setUser=(payload)=>{
    return {
        type:SET_USER,
        payload

    }
}



export const deleteUser=(payload)=>{
    return {
        type:DELETE_USER,
        payload

    }
}