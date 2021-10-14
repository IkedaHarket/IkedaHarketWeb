import React from 'react'

const Pagina = ({nombre,enlace,imagen,descripcion}) => {
    return (
        <div className="portafolio__pagina">
            <div className="portafolio__pagina-img">
                <img src={imagen} alt={nombre}/>
            </div>
            <div className="portafolio__pagina-texto">
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
