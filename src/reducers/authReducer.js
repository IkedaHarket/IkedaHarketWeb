import { types } from "../types/types";

const initialState = {
    uid: null,
    displayName:null
}

export const authReducer = (state = initialState , action)=>{

    switch (action.type) {
        case types.authLogin:
            return{
                ...state,
                uid: action.payload.uid,
                displayName: action.payload.displayName,
            }
        case types.authLogout:
            return{
                ...state,
                uid:null,
                displayName:null
            }

        default:    
            return state;
    }
}