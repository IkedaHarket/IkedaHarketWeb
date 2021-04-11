import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Habilidad from './Habilidad'

const HabilidadesContenedor = () => {

    const {habilidades} = useSelector(state => state.habilidad)

    return (
        <Container>
            <Row className="habilidadesContenedor">
                {
                    habilidades.map(({id,color,nombre,porcentaje})=>(       
                        <Habilidad key={id} color={color} nombre={nombre} porcentaje={porcentaje} />   
                    ))
                }
            </Row>
        </Container>
    )
}

export default HabilidadesContenedor
