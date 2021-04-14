import { types } from "../types/types";

const initialState = {
    imagenesCargando:true,
    imagenes:[],
    imgActiva:null
}

export const imgReducer = (state = initialState , action)=>{

    switch (action.type) {
        case types.imgCargando:
            return{
                ...state,
                imagenesCargando:false,
            }
        case types.imgActiva:
            return{
                ...state,
                imagenes:[
                    ...state.imagenes
                ],
                imgActiva: action.payload
            }
        case types.imgActivaClear:
            return{
                ...state,
                imgActiva: null
            }
        case types.imgCarruselAgregarQuitar:
            return{
                ...state,
                imagenes: state.imagenes.map(img=>{
                    if(img.codigo === action.payload){
                        
                        img.carrusel= !img.carrusel
                        return img
                    }else{
                        return img
                    }
                })
            }
        case types.imgAgregarImagenApp:
        return{
            ...state,
            imagenes:[
                ...state.imagenes,
                action.payload
            ]
        }
        case types.imgUpdateImagenApp:  
        return{
            ...state,
            imagenes: state.imagenes.map(img => {
                            return (img.codigo === action.payload.codigo)
                            ?action.payload
                            :img
                        })
        }
        case types.imgEliminarApp:
            return{
                ...state,
                imagenes: state.imagenes.filter(img => img.codigo !== action.payload)
            }
        default:    
            return state;
    }
}