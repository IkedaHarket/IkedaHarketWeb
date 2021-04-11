import React from 'react'


import MenuItem from '../MenuItem';
import Logout from './Logout';
import BtnNoche from '../BtnNoche';
import {iconos}  from '../../../../images/icons/index';
const { iconGaleria,iconCodigo,iconMaple } = iconos;

const MenuPrivado = () => {

    return (
        <nav className="menu">

            <MenuItem to="/portafolio" icon={iconCodigo} page="Portafolio"/>
            <MenuItem to="/galeria" icon={iconGaleria} page="Galeria"/>
            <MenuItem to="/dashboard" icon={iconMaple} page="Dashboard"/>
            <Logout /> 

            <BtnNoche />
    
        </nav>
    )
}

export default MenuPrivado
