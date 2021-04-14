import React, { useEffect } from 'react'
import { Col, Container, Form, Row, Table } from 'react-bootstrap'
import TituloAnimado from '../../ui/TituloAnimado/TituloAnimado'
import {iconos} from '../../../images/icons/index'
import { useDispatch, useSelector } from 'react-redux'
import {    imgActivaClear,
            imgActivaSet,
            startActualizarHabilidad,
            startActualizarImagen,
            startBorrarImagen,
            startCrearImagen 
        } from '../../../actions/img'
import { useForm } from '../../../hooks/useForm'
import Swal from 'sweetalert2'
const {iconAprobar, iconCerrar} = iconos

const initialForm = {
    codigo: '',
    img:'',
    titulo:'',
    texto:'',
    alt:'',
    carrusel:false
}
const AdmImagenes = () => {

    const {imagenes,imgActiva} = useSelector(state => state.img)
    const dispatch = useDispatch();

    const [ formValues, handleInputChange,,setFormValues ] = useForm(initialForm)
    useEffect(()=>{
        if(imgActiva){
            setFormValues(imgActiva)
        }else{
            setFormValues(initialForm)
        }
    },[imgActiva,setFormValues])
    
    const {codigo,titulo,texto,carrusel} = formValues //Falta extraer alt

    const reset = ()=>{
        dispatch(imgActivaClear());
    }

    const handleActualizarImagen = (img)=>{
        dispatch(imgActivaSet(img))
    }
    const handleEliminar = ()=>{
        dispatch(startBorrarImagen(codigo));
        Swal.fire('Listo','Imagen eliminada correctamente','success')
        setFormValues(initialForm)
    }
    const handleFile = (e)=>{
        setFormValues({
            ...formValues,
            img:e
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(titulo.length < 2) return Swal.fire('Error','El titulo es demasiado corto','error');
        if(texto.length < 2) return Swal.fire('Error','El texto es demasiado corto','error');
        if(!formValues.img)return Swal.fire('Error','Debe seleccionar una imagen','error');
        if(codigo){
            (imgActiva.img === formValues.img)
            ?dispatch(startActualizarImagen(formValues,false))
            :dispatch(startActualizarImagen(formValues,true))
        }else{
            dispatch(startCrearImagen(formValues))
        }
        setFormValues(initialForm)
    }

    return (
        <div className="admImagenes">
            <TituloAnimado texto="Imagenes" />
            <Container fluid>
                <Row>
                    <Col className="admImagenes-colForm">
                        <Form className="admImagenes__form" onSubmit={handleSubmit} encType="multipart/form-data">
                            <input 
                                type="hidden"
                                value={(codigo) && codigo}
                            />
                            <input 
                                type="text"
                                placeholder="Titulo"
                                name="titulo"
                                value={titulo}
                                onChange={handleInputChange}
                            />
                            <textarea
                                placeholder="Texto"
                                name="texto"
                                value={texto}
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
                            <Form.Check 
                                className="mb-3 texto"
                                type="switch"
                                id="custom-switch"
                                label="Carrusel"
                                name="carrusel"
                                checked={carrusel}
                                onChange={handleInputChange}
                            />
                            <div>
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
                            </div> 
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} >
                        <Table striped bordered hover className="admImagenes__table mt-5">
                            <thead>
                                <tr>
                                <th className="texto">IMG</th>
                                <th className="texto">Titulo</th>
                                <th className="texto">Texto</th>
                                <th className="texto">Carrusel</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                imagenes.map(img=>(
                                    <tr key={img.codigo} 
                                        onClick={
                                            ()=>handleActualizarImagen(img)
                                        }
                                    >
                                        <td className="centrar">
                                            <img src={img.img}
                                            alt={img.alt}
                                            />
                                        </td>
                                        <td className="texto">{img.titulo}</td>
                                        <td className="texto">{img.texto}</td>
                                        <td className="centrar">
                                            <img src={(img.carrusel)? iconAprobar :iconCerrar}
                                            alt={img.alt}
                                            />
                                        </td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AdmImagenes
