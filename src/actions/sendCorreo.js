import Swal from "sweetalert2"
import { fetchSinToken } from "../helpers/fetch"


export const sendCorreo = async(correo,mensaje)=>{
    
        try {
            const resp = await fetchSinToken("contacto",{correo,mensaje},"POST")
            const body = await resp.json()
            if(body.ok) return Swal.fire('Listo',body.msg,'success')
            return Swal.fire('Error','Correo no valido','error')

        } catch (error) {
            return Swal.fire('Error','Error al mandar el mensaje','error')
        }
    
} 