import { types } from "../types/types"


export const listarHabilidades = ()=>({type: types.habilidadListar})
export const limpiarHabilidadActiva = ()=>({type: types.habilidadActivaClear})

export const setHabilidadActiva = (habilidad)=>{
    return{
        type: types.habilidadActivaSet,
        payload:habilidad
    }
}
export const agregarHabilidadApp = (habilidad)=>{
    habilidad.id = new Date().getTime();
    return{
        type: types.habilidadAddApp,
        payload:habilidad
    }
}
export const actualizarHabilidadApp = (habilidad)=>{
    return{
        type: types.habilidadUpdateApp,
        payload:habilidad
    }
}
export const eliminarHabilidadApp = (id)=>{
    return{
        type: types.habilidadEliminarApp,
        payload:id
    }
}