import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { startVerHabilidad } from '../../../actions/habilidad'
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
                     ?<h1 className="texto">Espere...</h1>
                     :habilidades.map((habilidad)=>(       
                        <Habilidad key={habilidad.id} {...habilidad} />   
                     ))
                }
            </Row>
        </Container>
    )
}

export default HabilidadesContenedor
