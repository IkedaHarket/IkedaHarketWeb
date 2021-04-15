import Swal from "sweetalert2"
import { fetchSinToken } from "../helpers/fetch"


export const sendCorreo = async(asunto,mensaje)=>{
    
        try {
            const resp = await fetchSinToken("contacto",{asunto,mensaje},"POST")
            const body = await resp.json()
            return Swal.fire('Listo',body.msg,'success')

        } catch (error) {
            return Swal.fire('Error','Error al mandar el mensaje','error')
        }
    
} 