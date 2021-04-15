import React from 'react'
import Swal from 'sweetalert2';
import { sendCorreo } from '../../../actions/sendCorreo';
import { useForm } from '../../../hooks/useForm'

const FormularioFooter = () => {

    const [formValues, handleInputChange,,setFormValues] = useForm({
        correo:'',
        mensaje:''
    });

    const {correo,mensaje} = formValues;

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(correo.length === 0) return Swal.fire('Error', 'El Correo es obligatorio','error')
        if(mensaje.length === 0) return Swal.fire('Error', 'La Mensaje es obligatorio','error')

        sendCorreo(correo,mensaje)
        setFormValues({
            correo:'',
            mensaje:''
        })
    }
    return (
        <form 
        className="footer__formulario"
        onSubmit={handleSubmit}
        >        
            <input 
            type="text"
            placeholder="Correo"
            name="correo"
            value={correo}
            onChange={handleInputChange}
            />
            <textarea 
            placeholder="Mensaje..."
            name="mensaje"
            value={mensaje}
            onChange={handleInputChange}
            />
            <button 
            type="submit"
            className="boton"
            >
                Enviar    
            </button>        
        </form>
    )
}

export default FormularioFooter
