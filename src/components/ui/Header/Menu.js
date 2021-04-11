import React from 'react'


import BtnNoche from './BtnNoche';
import MenuItem from './MenuItem';

import { useSelector } from 'react-redux';
import Logout from './Logout';

import {iconos}  from '../../../images/icons/index';
const { iconGaleria,iconCodigo,iconMaple } = iconos;


const Menu = () => {
    const {uid} = useSelector(state => state.auth)

    return (
        <nav className="menu">

            <MenuItem to="/portafolio" icon={iconCodigo} page="Portafolio"/>
            <MenuItem to="/galeria" icon={iconGaleria} page="Galeria"/>
            {(!uid) && <MenuItem to="/login" icon={iconMaple} page="Login"/>}
            {(uid) && (<MenuItem to="/dashboard" icon={iconMaple} page="Dashboard"/>)}
            {(uid) && ( <Logout /> )}

            <BtnNoche />
    
        </nav>
    )
}

export default Menu
