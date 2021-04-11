import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Hamburger from '../Hamburger'
import HeaderLogo from '../HeaderLogo'
import MenuPublico from './MenuPublico'
import MenuXSPublico from './MenuXSPublico'

const HeaderPublico = () => {

    return (
        <>
        <Container fluid className="header">
            <header >
                
                <Row>
                    <Col xs={8} lg={4} className="header__logo">
                        <HeaderLogo />
                    </Col>
                    <Col lg={8} className="d-none d-lg-block">
                        <MenuPublico />
                    </Col>
                    <Col xs={4} className="flex-center d-lg-none">
                        <Hamburger />
                    </Col>
                </Row>
                
            </header>
        </Container>
        <Row>
            <Col xs={12} className="d-lg-none ">
                <MenuXSPublico />
            </Col>
        </Row>
        </>
    )
}

export default HeaderPublico