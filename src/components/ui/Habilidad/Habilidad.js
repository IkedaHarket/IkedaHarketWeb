import React from 'react'
import { Col } from 'react-bootstrap'

const Habilidad = ({color='#00ff43',nombre='html',porcentaje="90"}) => {

    return (
        <Col xs={12} sm={6} lg={4} xl={3} className="habilidadesContenedor-item">
            <div 
            className="habilidad"
            >
                <div className="habilidad__box">
                    <div className="habilidad__percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"
                            
                            ></circle>
                            <circle cx="70" cy="70" r="70"
                            style={{
                                strokeDashoffset: `calc(440 - (440 * ${porcentaje}) / 100)`,
                                stroke: color
                            }}
                            ></circle>
                        </svg>
                        <div className="habilidad__number">
                            <h2 
                            style={{
                                color
                            }}
                            >
                                {porcentaje}<small>%</small>
                            </h2>
                        </div>
                    </div>
                    <h2 className="habilidad__text">{nombre}</h2>
                </div>
            </div>
        </Col>
        
    )
}

export default Habilidad
