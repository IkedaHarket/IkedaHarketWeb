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
export const startUploadingImage = (file)=>{
    return async(dispatch) =>{
        Swal.fire({
            title:'Uploading...',
            text:'Please Wait...',
            showConfirmButton:false,
            allowOutsideClick:false,
            willOpen: ()=>{
                Swal.showLoading();
            }
        })

        await fileUpload(file); //*Para limpiar la consola Temporal
        // const fileUrl  = await fileUpload(file);
        //TODo agregar a la base de datos
        Swal.close();
    }
}