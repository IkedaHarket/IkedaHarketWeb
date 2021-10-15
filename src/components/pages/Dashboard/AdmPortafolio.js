import React, { useEffect } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import TituloAnimado from '../../ui/TituloAnimado/TituloAnimado'
// import {iconos} from '../../../images/icons/index'
// import { useDispatch, useSelector } from 'react-redux'

import { useForm } from '../../../hooks/useForm'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { clearPaginaActiva, startActualizarPagina, startBorrarPagina, startCrearPagina } from '../../../actions/pagina'
import PortafolioContenedor from '../../ui/Portafolio/PortafolioContenedor'
import { useSelector } from 'react-redux'

const initialForm = {
    id:'',
    nombre: '',
    imagen:'',
    enlace:'',
    descripcion:''
}

const AdmPortafolio = () => {

    const dispatch = useDispatch();

    const {paginaActiva} = useSelector(state => state.pagina)

    const [ formValues, handleInputChange,,setFormValues ] = useForm(initialForm)

    const {id,nombre,imagen,enlace,descripcion} = formValues;

    useEffect(()=>{
        if(paginaActiva){
            setFormValues(paginaActiva)
        }else{
            setFormValues(initialForm)
        }
    },[paginaActiva,setFormValues])


    const handleFile = (e)=>{
        setFormValues({
            ...formValues,
            imagen:e
        })
    }
    const reset = ()=>{
        dispatch(clearPaginaActiva());
    }
    const handleEliminar = ()=>{
        dispatch(startBorrarPagina(id));
        Swal.fire('Listo','Pagina eliminada correctamente','success')
        setFormValues(initialForm)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(nombre.length < 2) return Swal.fire('Error','El nombre es demasiado corto','error');
        if(enlace.length < 8) return Swal.fire('Error','El enlace es demasiado corto','error');
        if(!formValues.imagen)   return Swal.fire('Error','Debe seleccionar una imagen','error');
        
        if(id){
            (paginaActiva.imagen === formValues.imagen)
            ?dispatch(startActualizarPagina(formValues,false))
            :dispatch(startActualizarPagina(formValues,true))
        }else{
            dispatch(startCrearPagina(formValues))
        }
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
                                value={(id) && id}
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
                            <textarea
                                placeholder="Decripcion"
                                name="descripcion"
                                value={descripcion}
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
                            <div>
                            <button
                                type="submit"
                                className="boton mr-3 mb-3"
                            >
                                {(id) ? 'Actualizar' : ' Agregar'}
                            </button>
                            {(id) && 
                            (
                            <button type="reset" onClick={reset} className="boton mr-3">
                               Limpiar
                            </button>
                            )
                            } 
                            {(id) && 
                            (
                            <button onClick={handleEliminar} className="boton mr-3">
                               Eliminar
                            </button>
                            )
                            }
                            </div>
                        </Form>
                    </Col>
                </Row>
                <PortafolioContenedor />
            </Container>
        </div>
    )
}

export default AdmPortafolio
