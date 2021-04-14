import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import InicioPage from '../components/pages/InicioPage'
import PortafolioPage from '../components/pages/PortafolioPage'
import GaleriaPage from '../components/pages/GaleriaPage'
import LoginPage from '../components/pages/LoginPage'

import ImagenPage from '../components/pages/ImagenPage';
import { useDispatch, useSelector } from 'react-redux';
import HeaderPublico from '../components/ui/Header/HeaderPublico/HeaderPublico';
import HeaderPrivado from '../components/ui/Header/HeaderPrivado/HeaderPrivado';
import AdmCarrusel from '../components/pages/Dashboard/AdmCarrusel';
import AdmHabilidades from '../components/pages/Dashboard/AdmHabilidades';
import AdmImagenes from '../components/pages/Dashboard/AdmImagenes';
import { login } from '../actions/auth';
import { startVerImagenes } from '../actions/img';




const AppRoutes = () => {

  const dispatch = useDispatch();
  let {uid} = useSelector(state => state.auth)
  let {imagenesCargando} = useSelector(state => state.img)

  useEffect(() => {
    dispatch(startVerImagenes());
  }, [dispatch])
  
  if(!uid){
    uid = JSON.parse(localStorage.getItem('user')) || null;
    if(uid){
      try {
        dispatch(login(uid));
      } catch (error) {
        
      }
    }
  } 
  if(imagenesCargando){
    return <h1 className="texto">Espere...</h1>
  }
    return (
        <Router>
      <div>
      

        {
          (uid)
          ? <HeaderPrivado />
          :<HeaderPublico />
        }
        <div className="ajuste-header-fixed"></div>

        <Switch>
          {/* //*Si esto se agranda mas seria recomendable separar en Public Private */}
          
          {(!uid) && <Route path="/login" exact component={LoginPage}/>}
          {(uid) && <Route path="/dashboard/carrusel" exact component={AdmCarrusel}/>}
          {(uid) && <Route path="/dashboard/habilidades" exact component={AdmHabilidades}/>}
          {(uid) && <Route path="/dashboard/imagenes" exact component={AdmImagenes}/>}
          
          <Route path="/galeria" exact component={GaleriaPage}/>
          <Route path="/imagen/:imagenId" exact component={ImagenPage}/>
          <Route path="/portafolio" exact component={PortafolioPage}/>
          <Route path="/" exact component={InicioPage}/>

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
    )
}

export default AppRoutes
