import React from 'react'
import { Col, Row } from 'react-bootstrap'

//*IMAGENES TEMPORALES
import youtube from '../../../images/redes/youtube.png'
import facebook from '../../../images/redes/facebook.png'
import ig from '../../../images/redes/ig.png'
import discord from '../../../images/redes/discord.png'

const RedesSeccion = () => {
    //TODO: al conectar a la bd solo se necesitaria una col
    return (
        <Row className="redesSeccion">
            <Col xs={12} md={6} lg={4} xl={3}>
                <a 
                href="https://www.youtube.com/channel/UCWBgGs5ecEe3owzDxSa-LPQ"
                target="__blank"
                >
                    <img src={youtube} alt="youtube"/>
                </a>
            </Col>
            <Col xs={12} md={6} lg={4} xl={3}>
                <a 
                href="https://www.facebook.com/IkedaHarket/"
                target="__blank"
                >
                    <img src={facebook} alt="facebook"/>
                </a>
            </Col>
            <Col xs={12} md={6} lg={4} xl={3}>
                <a 
                href="https://www.instagram.com/ikeda_11/?fbclid=IwAR2NybnLED8U1_fHG-5H3PAZJg1lp1Prcm7isHPRKewWeSgMPpoTuKvM8QI"
                target="__blank"
                >
                    <img src={ig} alt="instagram"/>
                </a>
            </Col>
            <Col xs={12} md={6} lg={4} xl={3}>
                <a 
                href="https://discord.gg/A5KMwwRfd5"
                target="__blank"
                >
                    <img src={discord} alt="discord"/>
                </a>
            </Col>
        </Row>
    )
}

export default RedesSeccion
