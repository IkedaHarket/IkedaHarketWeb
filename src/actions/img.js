import { types } from "../types/types"



export const imgActiva = (imagen)=>{
    return {
        type: types.imgActiva,
        payload: imagen
    }
}
export const imgActivaClear = ()=>({type: types.imgActivaClear});

export const actualizarImagenCarrusel = (id)=>{
    return{
        type: types.imgCarruselAgregarQuitar,
        payload:id
    }
}