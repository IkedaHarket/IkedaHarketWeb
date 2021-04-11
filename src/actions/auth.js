import { types } from "../types/types";


export const logout = ()=>({type: types.authLogout})
export const login = (uid,displayName)=>{
    return{
        type: types.authLogin,
        payload:{
            uid,
            displayName
        }
    }
}