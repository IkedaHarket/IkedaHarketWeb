import React from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { imgActivaClear } from '../../actions/img';


const ImagenPage = ({history}) => {
    
    let {imgActiva} = useSelector(state => state.img);
    const dispatch = useDispatch();
    if(!imgActiva) imgActiva = JSON.parse(localStorage.getItem('imgActiva')) || history.push('/');

    const {img,titulo,texto} = imgActiva
    
    const handleVolver = ()=>{
        dispatch(imgActivaClear());
    }
    return (
        <>
            <Container fluid className="imagenPage">

                <img src={img} alt={titulo}/>
                <div>
                    <h3 className="imagenPage__titulo ">{titulo}</h3>
                    <p>{texto}</p>
                    <Link
                    to="/galeria"
                    className="boton"
                    onClick={handleVolver}
                    >
                        Volver
                    </Link>
                </div>
            </Container>
        </>
    )
}

export default ImagenPage
