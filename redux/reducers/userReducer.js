import { DELETE_USER, EDIT_USER, SET_USER } from "../actions/constants"

const initialState = {
    user:{}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SET_USER:
        return {
            ...state,
            ...payload,
        }
   
    case DELETE_USER:
        return {}
    
    default:
        return state
    }
}
