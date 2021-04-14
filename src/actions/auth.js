
import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";


export const logout = ()=>{
    localStorage.setItem('user',JSON.stringify(null))
    localStorage.setItem('token',JSON.stringify(null))
    localStorage.setItem('token-init-date',JSON.stringify(null))
    return{type: types.authLogout}
}
export const login = (uid,displayName)=>{
    return{
        type: types.authLogin,
        payload:{
            uid,
            displayName
        }
    }
}

export const startLogin =(correo,password)=>{
    return async(dispatch)=>{
        const resp = await fetchSinToken('auth/login',{correo,password},'POST');
        const body = await resp.json();
        if(body.ok){
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            localStorage.setItem('user',JSON.stringify({uid: body.usuario.uid,name: body.usuario.nombre}))
            dispatch(login({
                uid: body.usuario.uid,
                name: body.usuario.nombre
            }))
        }else{
            return {
                error: true,
                msg:body.errors[0].msg
            }
        }
    }
}