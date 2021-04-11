import { types } from "../types/types";

const initialState = {
    hamburger: false,
    noche: false,
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
        default:    
            return state;
    }
}