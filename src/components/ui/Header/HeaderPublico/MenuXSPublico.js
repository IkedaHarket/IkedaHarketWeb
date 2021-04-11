import React from 'react'
import { useSelector } from 'react-redux'
import MenuPublico from './MenuPublico'

const MenuXS = () => {
    const {hamburger} = useSelector(state => state.ui)
    return (
        <div className={`menuXS ${(hamburger) && `menuXS-active`}`}>
            <MenuPublico />
        </div>
    )
}

export default MenuXS
