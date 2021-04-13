import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uiHamburgerClose, uiNocheDia, uiNocheDiaSet } from '../../../actions/ui';

import {iconos}  from '../../../images/icons/index';
const { iconMoon,iconSun } = iconos;
const $body = document.querySelector('body')

let noche = JSON.parse(localStorage.getItem('noche'));
const BtnNoche = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(uiNocheDiaSet(noche))
    }, [dispatch,noche])

    const handleNocheDia = ()=>{

        dispatch(uiNocheDia());
        noche = !noche
        localStorage.setItem('noche',JSON.stringify(noche));
        dispatch(uiHamburgerClose());
    }

    (noche)
    ?$body.classList.add('dark')
    :$body.classList.remove('dark') 
    
    return (
        <div 
        className="btnNoche"
        onClick={handleNocheDia}
        >
            <img 
            src={
                (noche)?iconSun:iconMoon
            }
            alt="DiaNoche"
            />
            {(noche)?'Dia':'Noche'}
        </div>
    )
}

export default BtnNoche
