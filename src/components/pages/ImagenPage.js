import React from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const ImagenPage = ({history}) => {
    
    let {imgActiva} = useSelector(state => state.img);
    
    if(!imgActiva) imgActiva = JSON.parse(localStorage.getItem('imgActiva')) || history.push('/');

    
    const {img,titulo,texto} = imgActiva
    
    return (
        <>
            <Container fluid className="imagenPage">

                <img src={img} alt={titulo}/>
                <div>
                    <h3 className="imagenPage__titulo">{titulo}</h3>
                    <p>{texto}</p>
                    <Link
                    to="/galeria"
                    className="boton"
                    >
                        Volver
                    </Link>
                </div>
            </Container>
        </>
    )
}

export default ImagenPage
