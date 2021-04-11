import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { uiHamburgerClose } from '../../../actions/ui';

const MenuItem = ({to,icon,page}) => {
    
    const dispatch = useDispatch();
    const handleHamburger = ()=>{
        dispatch(uiHamburgerClose())
    }

    return (
        <div className="menu__item">
            <NavLink 
                activeClassName="active"
                className="menu__item-navlink" 
                exact
                onClick={handleHamburger}
                to={to}
            >
                <img src={icon} alt={`Icon ${page}`}/>
                {page}
            </NavLink>
        </div>
    )
}

export default MenuItem
