import { types } from "../types/types";

const initialState = {
    habilidadCargando:true,
    habilidades:[],
    habilidadActiva:null
}

export const habilidadReducer = (state = initialState , action)=>{
    
    switch (action.type) {
        case types.habilidadCargarHabilidades:
            return{
                ...state,
                habilidades: [...action.payload]
            }
        case types.habilidadCargando:
        return{
            ...state,
            habilidadCargando: false
        }
        case types.habilidadActivaSet:
            return{
                ...state,
                habilidadActiva: action.payload
            }
        case types.habilidadActivaClear:
            return{
                ...state,
                habilidadActiva: null
            }
        case types.habilidadAddApp:
            return{
                ...state,
                habilidades:[
                    ...state.habilidades,
                    action.payload
                ]
            }
        case types.habilidadUpdateApp:  
        return{
            ...state,
            habilidades: state.habilidades.map(habilidad => {
                            return (habilidad.id === action.payload.id)
                            ?action.payload
                            :habilidad
                        })
        }
        case types.habilidadEliminarApp:
            return{
                ...state,
                habilidades: state.habilidades.filter(habilidad => habilidad.id !== action.payload)
            }
        default:    
            return state;
    }
}