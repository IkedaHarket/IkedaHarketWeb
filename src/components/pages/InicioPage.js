import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Carrusel from '../ui/Carrusel/Carrusel'
import Footer from '../ui/Footer/Footer'
import RedesSeccion from '../ui/Redes/RedesSeccion'

const InicioPage = () => {
    return (
        <>
            <Carrusel />
            <Row className="acercaDe">
                <Col lg={1} className="d-none d-lg-block"/>
                <Col xs={12} lg={3} className="acercaDe__img">
                    <img src="https://ikedaharket.com/img/yo/1.jpg" alt="fotoPerfil"/>
                </Col>
                <Col xs={12} lg={7} className="acercaDe__texto">
                    <h2 className="titulo">Acerca de mi</h2>
                    <p className="texto">
                        Soy un estudiante de ingeniería en informática, estudié electricidad en <a href="https://www.lippac.cl/" className="enlace" target="__black">Liceo Industrial Presidente Pedro Aguirre Cerda.</a> Desde los 14 años conocí la programación, pasaba por muchos lenguajes pero no tenía un motivo por el que los quisiera aprender (no quería desarrollar nada) solo me gustaba pensar en como funcionaban las aplicaciones grandes. Desde los 18 años lo comencé a tomar en serio desarrollando páginas web.
                    </p>
                    <p className="texto">
                        Me gusta mucho armar puzzles como los cubos rubik o rompecabezas también paso tiempo con mis amigos jugando por internet, me gustan las películas de magia y comedia además disfruto de ver anime.
                    </p>
                    <p className="texto">
                        Quise hacer esta página para juntar todo lo que me gusta en un solo lugar. 🍁
                    </p>
                </Col>
                <Col lg={1} className="d-none d-lg-block"/>
            </Row>
            <RedesSeccion />
            <Footer /> 
        </>
    )
}

export default InicioPage
