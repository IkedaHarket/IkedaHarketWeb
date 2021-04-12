import { types } from "../types/types";

const initialState = {
    hamburger: false,
    noche: true,
}

export const uiReducer = (state = initialState , action)=>{

    switch (action.type) {
        case types.uiHamburger:
            return{
                ...state,
                hamburger: !state.hamburger
            }
        case types.uiHamburgerClose:
            return{
                ...state,
                hamburger: false
            }
        case types.uiNocheDia:
            return{
                ...state,
                noche: !state.noche
            }
        case types.uiNocheDiaSet:
            return{
                ...state,
                noche: action.payload
            }
        default:    
            return state;
    }
}