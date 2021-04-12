import React from 'react'
import AppRoutes from './routes/AppRoutes'

import {Provider} from 'react-redux'
import { store } from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css';


const IkedaWebApp = () => {
    
    return (
        <>
            <Provider store={store}>
                <AppRoutes />
            </Provider>
        </>
    )
}

export default IkedaWebApp
