import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { uiHamburger } from '../../../actions/ui';

const Hamburger = () => {

    const dispatch = useDispatch();
    const {hamburger} = useSelector(state => state.ui)
    const handleHamburger = ()=>{
        dispatch(uiHamburger())
    }
    return (
        <button 
        className={`hamburger hamburger--collapse ${(hamburger) && `is-active`} `} 
        type="button"
        onClick={handleHamburger}
        >
                
            <span className="hamburger-box ">
                <span className="hamburger-inner "></span>
            </span>
        </button>
    )
}

export default Hamburger
