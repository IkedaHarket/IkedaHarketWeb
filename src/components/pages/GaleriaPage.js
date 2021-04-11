import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Footer from '../ui/Footer/Footer'
import ImagenMediana from '../ui/Imagenes/ImagenMediana'
import TituloAnimado from '../ui/TituloAnimado/TituloAnimado'


const GaleriaPage = () => {

    const {imagenes} = useSelector(state => state.img)

    return (
        <>
            <TituloAnimado texto='Galeria' />
            <Container>
                <Row>
                    {
                        imagenes.map((img)=>(
                            <Col xs={12} md={6} lg={4} xl={3} xxl={2} key={img.codigo}>
                                <ImagenMediana key={img.codigo} {...img}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default GaleriaPage
