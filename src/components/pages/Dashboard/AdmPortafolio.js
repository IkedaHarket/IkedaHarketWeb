import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import TituloAnimado from '../../ui/TituloAnimado/TituloAnimado'
// import {iconos} from '../../../images/icons/index'
// import { useDispatch, useSelector } from 'react-redux'

import { useForm } from '../../../hooks/useForm'
import Swal from 'sweetalert2'

const initialForm = {
    codigo:'',
    nombre: '',
    img:'',
    enlace:'',
}

const AdmPortafolio = () => {

    const [ formValues, handleInputChange,,setFormValues ] = useForm(initialForm)

    const {codigo,nombre,img,enlace} = formValues;

    const handleFile = (e)=>{
        setFormValues({
            ...formValues,
            img:e
        })
    }
    const reset = ()=>{
        // dispatch(imgActivaClear());
    }
    const handleEliminar = ()=>{
        // dispatch(startBorrarImagen(codigo));
        Swal.fire('Listo','Imagen eliminada correctamente','success')
        setFormValues(initialForm)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(nombre.length < 2) return Swal.fire('Error','El nombre es demasiado corto','error');
        if(enlace.length < 2) return Swal.fire('Error','El enlace es demasiado corto','error');
        if(!formValues.img)   return Swal.fire('Error','Debe seleccionar una imagen','error');
        // if(codigo){
        //     (imgActiva.img === formValues.img)
        //     ?dispatch(startActualizarImagen(formValues,false))
        //     :dispatch(startActualizarImagen(formValues,true))
        // }else{
        //     dispatch(startCrearImagen(formValues))
        // }
        setFormValues(initialForm);
    }


    return (
        <div className="admPortafolio">
            <TituloAnimado texto="Portafolio" />
            <Container fluid>
                <Row>
                    <Col xs={12} className="admPortafolio-colForm">
                        <Form className="admPortafolio__form" onSubmit={handleSubmit} encType="multipart/form-data">
                            <input 
                                type="hidden"
                                value={(codigo) && codigo}
                            />
                            <input 
                                type="text"
                                placeholder="Nombre"
                                name="nombre"
                                value={nombre}
                                onChange={handleInputChange}
                            />
                            <input 
                                type="text"
                                placeholder="Enlace"
                                name="enlace"
                                value={enlace}
                                onChange={handleInputChange}
                            />
                        <Form.File 
                                className="my-3"
                                id="custom-file"
                                label="Selecciona Imagen"
                                data-browse="Buscar"
                                onChange={(e) => handleFile (e.target.files[0])}
                                custom
                            />
                            <button
                                type="submit"
                                className="boton mr-3 mb-3"
                            >
                                {(codigo) ? 'Actualizar' : ' Agregar'}
                            </button>
                            {(codigo) && 
                            (
                            <button type="reset" onClick={reset} className="boton mr-3">
                               Limpiar
                            </button>
                            )
                            } 
                            {(codigo) && 
                            (
                            <button onClick={handleEliminar} className="boton mr-3">
                               Eliminar
                            </button>
                            )
                            }
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AdmPortafolio
