import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {iconos}  from '../../../../images/icons/index';
import { uiHamburgerClose } from '../../../../actions/ui';

const Select = () => {

    const dispatch = useDispatch();
    const {noche} = useSelector(state => state.ui)
    const [dashboard, setDashboard] = useState(false)

    const handleinputDashboard = ()=>{
        setDashboard(!dashboard)
    }
    const handleHamburger = ()=>{
        dispatch(uiHamburgerClose())
    }
    return (
        <>
        <div className="menu__item" onClick={handleinputDashboard}>
            <div className="menu__item-navlink">
                <img src={(noche)?iconos.iconMapleDark:iconos.iconMaple} alt={`Icon Dashboard`}/>
                Dashboard
            </div>
            <div className={`dashboardMenu ${(dashboard) && 'dashboardMenu-active'}`}>
                <NavLink activeClassName="dashboardMenu__item-active" 
                className="boton" 
                to="/dashboard/carrusel"
                onClick={handleHamburger}
                >
                    Carrusel
                    </NavLink>
                <NavLink activeClassName="dashboardMenu__item-active" 
                className="boton" 
                to="/dashboard/habilidades"
                onClick={handleHamburger}
                >
                    Habilidades
                </NavLink>
                <NavLink activeClassName="dashboardMenu__item-active" 
                className="boton" 
                to="/dashboard/imagenes"
                onClick={handleHamburger}
                >
                    Imagenes
                </NavLink>
                <NavLink activeClassName="dashboardMenu__item-active" 
                className="boton" 
                to="/dashboard/portafolio"
                onClick={handleHamburger}
                >
                    Portafolio
                </NavLink>
            </div>
        </div>
        
        </>
    )
}

export default Select
