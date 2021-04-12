import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uiHamburgerClose, uiNocheDia, uiNocheDiaSet } from '../../../actions/ui';

import {iconos}  from '../../../images/icons/index';
const { iconMoon,iconSun } = iconos;
const $body = document.querySelector('body')
const BtnNoche = () => {

    const dispatch = useDispatch();
    
    const {noche} = useSelector(state => state.ui)

    const handleNocheDia = ()=>{
        dispatch(uiNocheDia());
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
