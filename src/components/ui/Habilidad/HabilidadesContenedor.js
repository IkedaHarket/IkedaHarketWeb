import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { startVerHabilidad } from '../../../actions/habilidad'
import SpriteCaminando from '../Esperando/SpriteCaminando'
import Habilidad from './Habilidad'

const HabilidadesContenedor = () => {

    const dispatch = useDispatch();
    const {habilidades,habilidadCargando} = useSelector(state => state.habilidad)

    useEffect(() => {
        dispatch(startVerHabilidad());
    }, [dispatch])
    
    return (
        <Container>
            <Row className="habilidadesContenedor">
            
                {   
                    (habilidadCargando) 
                     ?<div className="centrar"> <SpriteCaminando /> </div>
                     :habilidades.map((habilidad)=>(       
                        <Habilidad key={habilidad.id} {...habilidad} />   
                     ))
                }
            </Row>
        </Container>
    )
}

export default HabilidadesContenedor
