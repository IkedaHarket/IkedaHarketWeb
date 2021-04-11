import React from 'react'
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
import { useSelector } from 'react-redux';
import DashboardPage from '../components/pages/DashboardPage';
import HeaderPublico from '../components/ui/Header/HeaderPublico/HeaderPublico';
import HeaderPrivado from '../components/ui/Header/HeaderPrivado/HeaderPrivado';


const AppRoutes = () => {

  let {uid} = useSelector(state => state.auth)
  if(!uid) uid = JSON.parse(localStorage.getItem('user')) || null;
  


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
          <Route path="/galeria" exact component={GaleriaPage}/>
          <Route path="/imagen/:imagenId" exact component={ImagenPage}/>
          <Route path="/portafolio" exact component={PortafolioPage}/>
          {(!uid) && <Route path="/login" exact component={LoginPage}/>}
          <Route path="/" exact component={InicioPage}/>
          {(uid) && <Route path="/dashboard" exact component={DashboardPage}/>}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
    )
}

export default AppRoutes
