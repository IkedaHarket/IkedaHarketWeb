import { types } from "../types/types";

export const uiHamburger = ()=> ({type: types.uiHamburger});
export const uiHamburgerClose = ()=> ({type: types.uiHamburgerClose});

export const uiNocheDia = ()=> ({type: types.uiNocheDia});

export const uiNocheDiaSet = (noche)=>{
    return{
        type: types.uiNocheDiaSet,
        payload:noche
    }
}
