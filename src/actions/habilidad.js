import Swal from "sweetalert2"
import { fetchConToken, fetchSinToken } from "../helpers/fetch"
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
export const cargarHabilidades = (habilidades)=>{
    return{
        type: types.habilidadCargarHabilidades,
        payload:habilidades
    }
}
export const habilidadCargando = ()=>({type: types.habilidadCargando})

export const startVerHabilidad = ()=>{
    return async(dispatch) =>{
        const resp = await fetchSinToken('habilidades');
        const body = await resp.json();
        body.map(hab => {
            hab.id = hab._id
            delete hab._id
            return hab
        })
        dispatch(cargarHabilidades(body))
        dispatch(habilidadCargando())
    }
}
export const startCrearhabilidad = (habilidad)=>{
    return async(dispatch)=>{
        try {
            const resp = await fetchConToken('habilidades',habilidad,'POST');
            const body = await resp.json();
            body.habilidad.id = body.habilidad._id
            delete body.habilidad._id;
            dispatch(agregarHabilidadApp(body.habilidad))
            
            Swal.fire('Listo','Habilidad agregada correctamente','success')
        } catch (error) {
            console.log(error)
            Swal.fire('Error','Ocurrio un error al agregar la habilidad','error')
        }
    }
}
export const startActualizarHabilidad = (habilidad)=>{
    return async(dispatch) =>{
        try {
            const resp = await fetchConToken(`habilidades/${habilidad.id}`,{...habilidad},'PUT');
            const body = await resp.json();
            if(body.ok){
                dispatch(actualizarHabilidadApp(habilidad));
                dispatch(limpiarHabilidadActiva());
                Swal.fire('Listo','Habilidad actualizada correctamente','success')
            }else{
                Swal.fire('Error',body.msg,'error')
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error','Ocurrio un error al actualizar la habilidad','error')
        }
    }
}
export const startBorrarHabilidad = (id)=>{
    return async(dispatch)=>{
        try {
            const resp = await fetchConToken(`habilidades/${id}`,{},'DELETE');
            const body = await resp.json();
            if(body){
                dispatch(eliminarHabilidadApp(id));
            }else{
                Swal.fire('Error',body.msg,'error')
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error','Ocurrio un error al eliminar la habilidad','error')
        }
    }
}