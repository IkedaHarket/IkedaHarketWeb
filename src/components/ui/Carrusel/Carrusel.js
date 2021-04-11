import React from 'react'
import { Carousel } from 'react-bootstrap'

const itemsCarrusel = [
    {   
        id:1,
        imagen: 'https://ikedaharket.com/img/carousel/1.jpg',
        alt: 'nombre'
    },
    {
        id:2,
        imagen: 'https://ikedaharket.com/img/carousel/2.jpg',
        alt: 'nombre'
    },
    {
        id:3,
        imagen: 'https://ikedaharket.com/img/carousel/3.jpg',
        alt: 'nombre'
    },
    {
        id:4,
        imagen: 'https://ikedaharket.com/img/carousel/4.jpg',
        alt: 'nombre'
    }
]

const Carrusel = () => {

    return (
        <Carousel className="carrusel">
            {
            itemsCarrusel.map(({id,imagen,alt})=>
                (
                    <Carousel.Item interval={5000} key={id} className="carrusel__item">
                            <img
                            className="d-block w-100 carrusel__img"
                            src={imagen}
                            alt={alt}
                            />
                    </Carousel.Item>
                )
            )
        }
        </Carousel>
    )
}

export default Carrusel
