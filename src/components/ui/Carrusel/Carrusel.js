import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Carrusel = () => {

    const {imagenes} = useSelector(state => state.img)
    let displayNone = true;
    imagenes.forEach(({carrusel}) => {
        if (carrusel) displayNone = false;
    });

    return (
        <Carousel className={`carrusel ${(displayNone) && 'd-none'}`}>
            {
            imagenes.map(({codigo,img,alt,carrusel})=>
                (carrusel) &&
                <Carousel.Item interval={5000} key={codigo} className="carrusel__item">
                        <img
                        className="d-block w-100 carrusel__img"
                        src={img}
                        alt={alt}
                        />
                </Carousel.Item>
            
            )
        }
        </Carousel>
    )
}

export default Carrusel
