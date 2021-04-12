import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from '../../../../actions/auth';

import {iconos}  from '../../../../images/icons/index';
const { iconMadera } = iconos;



const Logout = () => {
    
    const history = useHistory();
    const dispatch = useDispatch()
    const handleLogout = ()=>{
        dispatch(logout());
        history.push('/')
    }

    return (
        <div 
        className="btnLogout"
        onClick={handleLogout}
        >
            <img 
            src={iconMadera}
            alt="Logout"
            />
            Logout
        </div>
    )
}

export default Logout
