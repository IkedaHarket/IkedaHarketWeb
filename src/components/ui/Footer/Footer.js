import React from 'react'
import Curva from './Curva'

import {iconos} from '../../../images/icons/index'
import FormularioFooter from './FormularioFooter'
import { useSelector } from 'react-redux'


const Footer = () => {
    const {noche} = useSelector(state => state.ui)
    return (
        <>
            <Curva />
            <div className="footer">

                <img src={(!noche)?iconos.iconMaple:iconos.iconMapleDark} alt='imagenFooter'/>

                <FormularioFooter />
            </div>
        </>
    )
}

export default Footer
