import React from 'react'
import { useSelector } from 'react-redux'
import MenuPrivado from './MenuPrivado'

const MenuXSPrivado = () => {
    const {hamburger} = useSelector(state => state.ui)
    return (
        <div className={`menuXS ${(hamburger) && `menuXS-active`}`}>
            <MenuPrivado />
        </div>
    )
}

export default MenuXSPrivado
