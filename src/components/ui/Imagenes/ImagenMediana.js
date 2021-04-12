import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { imgActiva } from '../../../actions/img';

const ImagenMediana = ({codigo,img,titulo,texto,alt,carrusel}) => {

    const imagen = {codigo,img,titulo,texto,alt,carrusel};

    const dispatch = useDispatch();

    const handleClick =()=>{
        localStorage.setItem('imgActiva',JSON.stringify(imagen))
        dispatch(imgActiva(imagen))
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
