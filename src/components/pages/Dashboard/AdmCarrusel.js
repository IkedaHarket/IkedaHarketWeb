import React from 'react'
import { Col,Row, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import TituloAnimado from '../../ui/TituloAnimado/TituloAnimado'
import {iconos} from '../../../images/icons/index'
import { actualizarImagenCarrusel } from '../../../actions/img'
const {iconAprobar, iconCerrar} = iconos

const AdmCarrusel = () => {

    const {imagenes} = useSelector(state => state.img)
    const dispatch = useDispatch();

    const handleActualizarCarrusel = (id)=>{
        dispatch(actualizarImagenCarrusel(id))
    }
    return (
        <div className="admCarrusel">
            <TituloAnimado texto="Carrusel" />
            <Container fluid>
                <Row>
                    <Col xs={12} >
                        <Table striped bordered hover className="admCarrusel__table">
                            <thead>
                                <tr>
                                <th>Carrusel</th>
                                <th>IMG</th>
                                <th>Titulo</th>
                                <th>Texto</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                imagenes.map(img=>(
                                    <tr key={img.codigo} 
                                    onClick={
                                        ()=>handleActualizarCarrusel(img.codigo)
                                    }
                                    >
                                        <td className="centrar">
                                            <img src={(img.carrusel)? iconAprobar :iconCerrar}
                                            alt={img.alt}
                                            />
                                        </td>
                                        <td className="centrar">
                                            <img src={img.img}
                                            alt={img.alt}
                                            />
                                        </td>
                                        <td>{img.titulo}</td>
                                        <td>{img.texto}</td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AdmCarrusel
