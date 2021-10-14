import React from 'react'
import Footer from '../ui/Footer/Footer'
import HabilidadesContenedor from '../ui/Habilidad/HabilidadesContenedor'
import PortafolioContenedor from '../ui/Portafolio/PortafolioContenedor'
import TituloAnimado from '../ui/TituloAnimado/TituloAnimado'



const PortafolioPage = () => {



    return (
        <>
            <TituloAnimado texto="Habilidades" />
                <HabilidadesContenedor />
            <TituloAnimado texto="Portafolio" />
                <PortafolioContenedor />
            <Footer />
        </>
    )
}

export default PortafolioPage
