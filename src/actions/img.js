import { types } from "../types/types"



export const imgActiva = (imagen)=>{
    return {
        type: types.imgActiva,
        payload: imagen
    }
}