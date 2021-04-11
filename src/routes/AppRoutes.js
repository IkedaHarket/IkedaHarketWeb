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
import Header from '../components/ui/Header/Header';
import ImagenPage from '../components/pages/ImagenPage';
import { useSelector } from 'react-redux';
import DashboardPage from '../components/pages/DashboardPage';


const AppRoutes = () => {

  const {uid} = useSelector(state => state.auth)

    return (
        <Router>
      <div>

        <Header />
        <div className="ajuste-header-fixed"></div>
        <Switch>
          <Route path="/galeria" exact component={GaleriaPage}/>
          <Route path="/imagen/:imagenId" exact component={ImagenPage}/>
          <Route path="/portafolio" exact component={PortafolioPage}/>
          <Route path="/login" exact component={LoginPage}/>
          <Route path="/" exact component={InicioPage}/>
          {(uid) && <Route path="/dashboard" exact component={DashboardPage}/>}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
    )
}

export default AppRoutes
