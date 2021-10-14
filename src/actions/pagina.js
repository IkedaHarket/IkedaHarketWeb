import Swal from "sweetalert2"
import { fetchConToken, fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types"


export const cargarPaginas = (paginas)=>{
    return{
        type: types.paginasCargarPaginas,
        payload:paginas
    }
}
export const cargandoPaginas = ()=>({type:types.paginasCargando})

export const startVerPagina = ()=>{
    return async(dispatch) =>{
        const resp = await fetchSinToken('paginas');
        const body = await resp.json();
        body.map(pag => {
            pag.id = pag._id
            delete pag._id
            return pag
        })
        dispatch(cargarPaginas(body))
        dispatch(cargandoPaginas());
    }
}
