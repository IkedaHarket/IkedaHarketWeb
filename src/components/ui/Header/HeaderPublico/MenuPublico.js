import React from 'react'


import BtnNoche from '../BtnNoche';
import MenuItem from '../MenuItem';

import {iconos}  from '../../../../images/icons/index';
import { useSelector } from 'react-redux';
const { iconGaleria,iconCodigo } = iconos;


const MenuPublico = () => {
    const {noche} = useSelector(state => state.ui)

    return (
        <nav className="menu">

            <MenuItem to="/portafolio" icon={iconCodigo} page="Portafolio"/>
            <MenuItem to="/galeria" icon={iconGaleria} page="Galeria"/>
            <MenuItem to="/login" icon={(!noche)?iconos.iconMaple:iconos.iconMapleDark} page="Login"/>

            <BtnNoche />
    
        </nav>
    )
}

export default MenuPublico
