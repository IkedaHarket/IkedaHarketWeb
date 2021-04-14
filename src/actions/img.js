import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { fileUpload } from "../helpers/fileUpload";
import { types } from "../types/types"



export const imgActivaSet = (imagen)=>{
    return {
        type: types.imgActiva,
        payload: imagen
    }
}
export const imgActivaClear = ()=>({type: types.imgActivaClear});
export const imgCargando = ()=>({type: types.imgCargando});

export const actualizarImagenCarrusel = (id)=>{
    return{
        type: types.imgCarruselAgregarQuitar,
        payload:id
    }
}
export const eliminarImagenApp = (id)=>{
    return{
        type: types.imgEliminarApp,
        payload:id
    }
}
export const startUploadingImage = (img)=>{
    return async(dispatch) =>{

        const fileUrl  = await fileUpload(img.img);
        // img.img = fileUrl
        // dispatch(agregarImagenApp(img))
        //TODo agregar a la base de datos
        
        return fileUrl
    }
}
export const startActualizarImage = (img,imgNueva)=>{
    return async(dispatch) =>{

        if(imgNueva){
            const fileUrl  = await fileUpload(img.img);
            return fileUrl   
        }else{
            return img.img;
        }
        // dispatch(imgUpdateImagenApp(img))
    }
}
export const agregarImagenApp = (img)=>{
    return{
        type: types.imgAgregarImagenApp,
        payload:img
    }
}
export const imgUpdateImagenApp = (img)=>{
    return{
        type: types.imgUpdateImagenApp,
        payload:img
    }
}
export const startVerImagenes = () =>{
    return async(dispatch) =>{
        const resp = await fetchSinToken('imagenes');
        const body = await resp.json();
        body.map(img => {
            img.codigo = img._id
            img.img = img.link
            delete img._id 
            delete img.link 
            return dispatch(agregarImagenApp(img))
        })
        
        dispatch(imgCargando())
    }
}
export const startCrearImagen = (imagen)=>{
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
            const fileUrl = await dispatch(startUploadingImage(imagen))
            imagen.link = fileUrl;
            const resp = await fetchConToken('imagenes',imagen,'POST');
            const body = await resp.json();

            dispatch(agregarImagenApp({
                codigo:     body._id,
                alt:        body.alt,
                carrusel:   body.carrusel,
                texto:      body.texto,
                titulo:     body.titulo,
                img:        body.link
            }))
            Swal.close();
            Swal.fire('Listo','Imagen agregada correctamente','success')
        } catch (error) {
            console.log(error)
            Swal.fire('Error','Ocurrio un error al agregar la imagen','error')
        }
    }
}
export const startActualizarImagen = (img,imgNueva)=>{
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
            const fileUrl = await dispatch(startActualizarImage(img,imgNueva));
            img.link = fileUrl;
            console.log(img)
            const resp = await fetchConToken(`imagenes/${img.codigo}`,{...img},'PUT');
            const body = await resp.json();
            dispatch(imgUpdateImagenApp({
                codigo:     body._id,
                alt:        body.alt,
                carrusel:   body.carrusel,
                texto:      body.texto,
                titulo:     body.titulo,
                img:        body.link
            }));
            dispatch(imgActivaClear());
            Swal.close();
            Swal.fire('Listo','Imagen actualizada correctamente','success')
             
        } catch (error) {
            console.log(error)
            Swal.fire('Error','Ocurrio un error al actualizar la Imagen','error')
        }
    }
}
export const startBorrarImagen = (id)=>{
    return async(dispatch)=>{
        try {
            const resp = await fetchConToken(`imagenes/${id}`,{},'DELETE');
            const body = await resp.json();
            if(body){
                dispatch(eliminarImagenApp(id));
            }else{
                Swal.fire('Error',body.msg,'error')
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error','Ocurrio un error al eliminar la habilidad','error')
        }
    }
}
export const startCambiarCarrusel = (img)=>{
    return async(dispatch) =>{
        try {
            img.link = img.img;
            img.carrusel = !img.carrusel
            const resp = await fetchConToken(`imagenes/${img.codigo}`,{...img},'PUT');
            const body = await resp.json();
            img.carrusel = !img.carrusel
            dispatch(actualizarImagenCarrusel(body._id));
            dispatch(imgActivaClear());
        } catch (error) {
            console.log(error)
            Swal.fire('Error','Ocurrio un error al actualizar la Imagen','error')
        }
    }
}