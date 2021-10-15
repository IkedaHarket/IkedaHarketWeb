import React from 'react'
import { useDispatch } from 'react-redux'
import { setPaginaActiva } from '../../../actions/pagina';

const Pagina = ({id,nombre,enlace,imagen,descripcion}) => {

    const dispatch = useDispatch();


    const handlePaginaActiva = ()=>{
        dispatch(setPaginaActiva({id,nombre,enlace,imagen,descripcion}))
    }

    return (
        <div className="portafolio__pagina" onClick={handlePaginaActiva}>
            <div className="portafolio__pagina-img"onClick={handlePaginaActiva} >
                <img src={imagen} alt={nombre}/>
            </div>
            <div className="portafolio__pagina-texto" onClick={handlePaginaActiva}>
                <h4>{nombre}</h4>
                <p>{descripcion}</p>
            
            <a 
                className="boton"
                href={enlace}
                target="_blank"
                rel="noreferrer"
            >
                Visitar   
            </a> 
            </div> 
        </div>
    )
}

export default Pagina
