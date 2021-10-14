import { types } from "../types/types";

const initialState = {
    paginaCargando:true,
    paginas:[],
    paginaActiva:null
}

export const paginaReducer = (state = initialState , action)=>{
    switch (action.type) {
        case types.paginasCargarPaginas:
            return{
                ...state,
                paginas: [...action.payload]
            }
        case types.paginasCargando:
            return{
                ...state,
                paginaCargando: false
            }



        default:    
            return state;
    }
}