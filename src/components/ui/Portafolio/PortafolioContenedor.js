import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { startVerPagina } from '../../../actions/pagina';
import SpriteCaminando from '../Esperando/SpriteCaminando';
import Pagina from './Pagina';

const PortafolioContenedor = () => {

    const dispatch = useDispatch();
    const {paginas,paginaCargando} = useSelector(state => state.pagina)

    useEffect(() => {
        dispatch(startVerPagina());
    }, [dispatch])
    
    return (
        <div className="portafolioContenedor"> 
            {
                (paginaCargando)
                ?<SpriteCaminando />
                :paginas.map((pag) =>(<Pagina key={pag.id} {...pag}/>))
            }
        </div>
    )
}

export default PortafolioContenedor
