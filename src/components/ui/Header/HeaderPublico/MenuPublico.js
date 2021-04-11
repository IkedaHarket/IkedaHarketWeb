import React from 'react'


import BtnNoche from '../BtnNoche';
import MenuItem from '../MenuItem';

import {iconos}  from '../../../../images/icons/index';
const { iconGaleria,iconCodigo,iconMaple } = iconos;


const MenuPublico = () => {


    return (
        <nav className="menu">

            <MenuItem to="/portafolio" icon={iconCodigo} page="Portafolio"/>
            <MenuItem to="/galeria" icon={iconGaleria} page="Galeria"/>
            <MenuItem to="/login" icon={iconMaple} page="Login"/>

            <BtnNoche />
    
        </nav>
    )
}

export default MenuPublico
