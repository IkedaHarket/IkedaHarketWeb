import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Hamburger from './Hamburger'
import HeaderLogo from './HeaderLogo'
import Menu from './Menu'
import MenuXS from './MenuXS'

const Header = () => {



    return (
        <>
        <Container fluid className="header">
            <header >
                
                <Row>
                    <Col xs={8} lg={4} className="header__logo">
                        <HeaderLogo />
                    </Col>
                    <Col lg={8} className="d-none d-lg-block">
                        <Menu />
                    </Col>
                    <Col xs={4} className="flex-center d-lg-none">
                        <Hamburger />
                    </Col>
                </Row>
                
            </header>
        </Container>
        <Row>
            <Col xs={12} className="d-lg-none ">
                <MenuXS />
            </Col>
        </Row>
        </>
    )
}

export default Header
