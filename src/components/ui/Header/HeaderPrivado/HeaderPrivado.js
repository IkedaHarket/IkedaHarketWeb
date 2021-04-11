import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Hamburger from '../Hamburger'
import HeaderLogo from '../HeaderLogo'
import MenuPrivado from './MenuPrivado'
import MenuXSPrivado from './MenuXSPrivado'

const HeaderPrivado = () => {

    return (
        <>
        <Container fluid className="header">
            <header >
                
                <Row>
                    <Col xs={8} lg={4} className="header__logo">
                        <HeaderLogo />
                    </Col>
                    <Col lg={8} className="d-none d-lg-block">
                        <MenuPrivado />
                    </Col>
                    <Col xs={4} className="flex-center d-lg-none">
                        <Hamburger />
                    </Col>
                </Row>
                
            </header>
        </Container>
        <Row>
            <Col xs={12} className="d-lg-none ">
                <MenuXSPrivado />
            </Col>
        </Row>
        </>
    )
}

export default HeaderPrivado