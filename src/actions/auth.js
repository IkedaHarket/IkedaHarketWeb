import { types } from "../types/types";


export const logout = ()=>{
    localStorage.setItem('user',JSON.stringify(null))
    return{type: types.authLogout}
}
export const login = (uid,displayName)=>{
    localStorage.setItem('user',JSON.stringify({uid,displayName}))
    return{
        type: types.authLogin,
        payload:{
            uid,
            displayName
        }
    }
}