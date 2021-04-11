import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const TituloAnimado = ({texto}) => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} className="tituloAnimado">
                    <h2 data-text={texto}>{texto}</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default TituloAnimado
