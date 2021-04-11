import React from 'react'
import Curva from './Curva'

import {iconos} from '../../../images/icons/index'
import FormularioFooter from './FormularioFooter'
const {iconMaple} = iconos

const Footer = () => {
    return (
        <>
            <Curva />
            <div className="footer">

                <img src={iconMaple} alt='imagenFooter'/>

                <FormularioFooter />
            </div>
        </>
    )
}

export default Footer
