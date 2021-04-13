import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";
import { types } from "../types/types"



export const imgActivaSet = (imagen)=>{
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
export const eliminarImagenApp = (id)=>{
    return{
        type: types.imgEliminarApp,
        payload:id
    }
}
export const startUploadingImage = (img)=>{
    return async(dispatch) =>{
        Swal.fire({
            title:'Agregando...',
            text:'Espere...',
            showConfirmButton:false,
            allowOutsideClick:false,
            willOpen: ()=>{
                Swal.showLoading();
            }
        })

        const fileUrl  = await fileUpload(img.img);
        img.img = fileUrl
        img.codigo= new Date().getTime()
        dispatch(agregarImagenApp(img))
        //TODo agregar a la base de datos

        Swal.close();
    }
}
export const startActualizarImage = (img,imgNueva)=>{
    return async(dispatch) =>{
        Swal.fire({
            title:'Actualizando...',
            text:'Espere...',
            showConfirmButton:false,
            allowOutsideClick:false,
            willOpen: ()=>{
                Swal.showLoading();
            }
        })

        if(imgNueva){
            const fileUrl  = await fileUpload(img.img);
            img.img = fileUrl   
        }
        dispatch(imgUpdateImagenApp(img))
        //TODo agregar a la base de datos

        Swal.close();
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