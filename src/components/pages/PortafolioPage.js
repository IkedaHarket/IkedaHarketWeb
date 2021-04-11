import React from 'react'
import Footer from '../ui/Footer/Footer'
import HabilidadesContenedor from '../ui/Habilidad/HabilidadesContenedor'
import TituloAnimado from '../ui/TituloAnimado/TituloAnimado'



const PortafolioPage = () => {



    return (
        <>
            <TituloAnimado texto="Habilidades" />
                <HabilidadesContenedor />
            <TituloAnimado texto="Portafolio" />

            <Footer />
        </>
    )
}

export default PortafolioPage
