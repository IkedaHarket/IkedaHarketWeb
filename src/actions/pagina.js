import Swal from "sweetalert2"
import { fetchConToken, fetchSinToken } from "../helpers/fetch"
import { fileUpload } from "../helpers/fileUpload"
import { types } from "../types/types"


export const cargarPaginas = (paginas)=>{
    return{
        type: types.paginasCargarPaginas,
        payload:paginas
    }
}
export const cargandoPaginas = ()=>({type:types.paginasCargando})

export const setPaginaActiva = (pagina)=>{
    return{
        type: types.setPaginaActiva,
        payload: pagina
    }
}

export const clearPaginaActiva = ()=>({type:types.clearPaginaActiva});

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

export const startUploadingImage = (pagina)=>{
    return async(dispatch) =>{

        const fileUrl  = await fileUpload(pagina.imagen);
        return fileUrl
    }
}
export const startCrearPagina = (pagina)=>{
    return async(dispatch)=>{
        try {
            Swal.fire({
                title:'Agregando...',
                text:'Espere...',
                showConfirmButton:false,
                allowOutsideClick:false,
                willOpen: ()=>{
                    Swal.showLoading();
                }
            })
            const fileUrl = await dispatch(startUploadingImage(pagina))
            pagina.imagen = fileUrl;
            console.log(pagina)
            const resp = await fetchConToken('paginas',pagina,'POST');
            const body = await resp.json();
            console.log(body)
            dispatch(startVerPagina())

            Swal.close();
            Swal.fire('Listo','Imagen agregada correctamente','success')
        } catch (error) {
            console.log(error)
            Swal.fire('Error','Ocurrio un error al agregar la imagen','error')
        }
    }
}
export const startActualizarPag = (img,imgNueva)=>{
    return async(dispatch) =>{

        if(imgNueva){
            const fileUrl  = await fileUpload(img.imagen);
            return fileUrl   
        }else{
            return img.imagen;
        }
    }
}
export const startActualizarPagina = (pagina,paginaNueva)=>{
    return async(dispatch) =>{
        try {
            Swal.fire({
                title:'Actualizando...',
                text:'Espere...',
                showConfirmButton:false,
                allowOutsideClick:false,
                willOpen: ()=>{
                    Swal.showLoading();
                }
            })
            const fileUrl = await dispatch(startActualizarPag(pagina,paginaNueva));
            pagina.imagen = fileUrl;

            const resp = await fetchConToken(`paginas/${pagina.id}`,{...pagina},'PUT');
            const body = await resp.json();

            dispatch(startVerPagina());
            dispatch(clearPaginaActiva());

            Swal.close();
            Swal.fire('Listo','Imagen actualizada correctamente','success')
             
        } catch (error) {
            console.log(error)
            Swal.fire('Error','Ocurrio un error al actualizar la Imagen','error')
        }
    }
}
export const startBorrarPagina = (id)=>{
    return async(dispatch)=>{
        try {
            const resp = await fetchConToken(`paginas/${id}`,{},'DELETE');
            const body = await resp.json();
            if(body){
                dispatch(startVerPagina());
            }else{
                Swal.fire('Error',body.msg,'error')
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error','Ocurrio un error al eliminar la pagina','error')
        }
    }
}
