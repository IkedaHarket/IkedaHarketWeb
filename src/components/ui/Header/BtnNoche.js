import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uiHamburgerClose, uiNocheDia } from '../../../actions/ui';

import {iconos}  from '../../../images/icons/index';
const { iconMoon,iconSun } = iconos;

const BtnNoche = () => {

    const dispatch = useDispatch();
    const {noche} = useSelector(state => state.ui)

    const handleNocheDia = ()=>{
        dispatch(uiNocheDia());
        dispatch(uiHamburgerClose());
    }

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
