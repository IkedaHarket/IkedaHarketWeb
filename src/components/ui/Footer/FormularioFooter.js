import React from 'react'
import Swal from 'sweetalert2';
import { useForm } from '../../../hooks/useForm'

const FormularioFooter = () => {

    const [formValues, handleInputChange] = useForm({
        asunto:'',
        mensaje:''
    });

    const {asunto,mensaje} = formValues;

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(asunto.length === 0) return Swal.fire('Error', 'El Asunto es obligatorio','error')
        if(mensaje.length === 0) return Swal.fire('Error', 'La Mensaje es obligatorio','error')
        //TODO: MANDAR MENSAJE

        
    }
    return (
        <form 
        className="footer__formulario"
        onSubmit={handleSubmit}
        >        
            <input 
            type="text"
            placeholder="Asunto"
            name="asunto"
            value={asunto}
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
