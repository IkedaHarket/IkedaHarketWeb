import { types } from "../types/types";

const initialState = {
    imagenes:[
        {
            codigo: new Date().getTime(),
            img:'https://ikedaharket.com/paginas/Completa1/img/TeVerde.jpg',
            titulo:'Te verde',
            texto:'Este es un te muy rico pero no se por que es verde'
        },
        {
            codigo: '1234',
            img:'https://ikedaharket.com/paginas/Completa2/img/fondo2.jpg',
            titulo:'Anime',
            texto:'No conosco este anime pero da igual'
        }
    ],
    imgActiva:null
}

export const imgReducer = (state = initialState , action)=>{

    switch (action.type) {
        case types.imgActiva:
            return{
                ...state,
                imagenes:[
                    ...state.imagenes
                ],
                imgActiva: action.payload
            }
        default:    
            return state;
    }
}