import React,{useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TituloAnimado from '../../ui/TituloAnimado/TituloAnimado'
import { useDispatch, useSelector } from 'react-redux'
import Habilidad from '../../ui/Habilidad/Habilidad'
import { agregarHabilidadApp, limpiarHabilidadActiva,actualizarHabilidadApp, eliminarHabilidadApp } from '../../../actions/habilidad'
import { useForm } from '../../../hooks/useForm'
import Swal from 'sweetalert2'

const initialForm = {
    id:'',
    color:'#000000',
    nombre:'',
    porcentaje:''
}
const AdmHabilidades = () => {
    
    const dispatch = useDispatch();
    const {habilidades,habilidadActiva} = useSelector(state => state.habilidad)

    const [ formValues, handleInputChange,,setFormValues ] = useForm(initialForm)

    useEffect(()=>{
        if(habilidadActiva){
            setFormValues(habilidadActiva)
        }else{
            setFormValues(initialForm)
        }
    },[habilidadActiva,setFormValues])
    
    const {id,color,nombre,porcentaje} = formValues

    const reset = ()=>{
        dispatch(limpiarHabilidadActiva());
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(nombre.length < 2) return Swal.fire('Error','El nombre es demasiado corto','error');
        if(porcentaje.length < 0 || porcentaje.length > 100) return Swal.fire('Error','El porcentaje debe estar entre 0 y 100','error');
        if(id){
            dispatch(actualizarHabilidadApp(formValues))
            Swal.fire('Listo','Habilidad actualizada correctamente','success')
        }else{
            dispatch(agregarHabilidadApp(formValues))
            Swal.fire('Listo','Habilidad agregada correctamente','success')
        }
        setFormValues(initialForm)
    }
    const handleEliminar = ()=>{
        dispatch(eliminarHabilidadApp(id));
        Swal.fire('Listo','Habilidad eliminada correctamente','success')
        setFormValues(initialForm)
    }
    return (
        <div className="AdmHabilidades">
            <TituloAnimado texto="Habilidades"/>
            <Container fluid>
                <Row>
                    <Col xs={12} lg={6} className="AdmHabilidades-col">
                        <form 
                        className="AdmHabilidades__form"
                        onSubmit={handleSubmit}
                        >
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
                                type="number"
                                placeholder="Porcentaje"
                                name="porcentaje"
                                min="0"
                                max="100"
                                value={porcentaje}
                                onChange={handleInputChange}

                            />
                            <input 
                                type="color"
                                placeholder="Color"
                                name="color"
                                value={color}
                                onChange={handleInputChange}
                            />
                            <div>
                            <button type="submit" className="boton mr-3 mb-3">
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
                        </form>
                    </Col>
                    <Col xs={12} lg={6} className="habilidadesContenedor">
                        <Row>
                        {
                            habilidades.map((habilidad)=>(       
                                <Habilidad 
                                key={habilidad.id} 
                                {...habilidad}
                                />   
                            ))
                        }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AdmHabilidades
