import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { imgActiva } from '../../../actions/img';

const ImagenMediana = ({codigo,img,titulo,texto}) => {
                        // codigo,img,titulo,texto

    const dispatch = useDispatch();

    const handleClick =()=>{
        localStorage.setItem('imgActiva',JSON.stringify({codigo,img,titulo,texto}))
        dispatch(imgActiva({codigo,img,titulo,texto}))
    }
    return (
        <div 
        className="imagenMediana"
        onClick={handleClick}
        >
            <Link
            to={`/imagen/${codigo}`}
            >
                <img src={img} alt={titulo}/>
            </Link>
        </div>
    )
}

export default ImagenMediana
