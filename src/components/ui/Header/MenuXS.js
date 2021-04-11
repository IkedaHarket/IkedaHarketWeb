import React from 'react'
import { useSelector } from 'react-redux'
import Menu from './Menu'

const MenuXS = () => {
    const {hamburger} = useSelector(state => state.ui)
    return (
        <div className={`menuXS ${(hamburger) && `menuXS-active`}`}>
            <Menu />
        </div>
    )
}

export default MenuXS
