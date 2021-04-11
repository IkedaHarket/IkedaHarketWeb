import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../../actions/auth';

import {iconos}  from '../../../images/icons/index';
const { iconmadera } = iconos;



const Logout = () => {
    
    const dispatch = useDispatch()
    const handleLogout = ()=>{
        dispatch(logout());
    }

    return (
        <div 
        className="btnLogout"
        onClick={handleLogout}
        >
            <img 
            src={iconmadera}
            alt="Logout"
            />
            Logout
        </div>
    )
}

export default Logout
