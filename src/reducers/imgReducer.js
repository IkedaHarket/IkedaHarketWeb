import { types } from "../types/types";

const initialState = {
    imagenes:[
        {
            codigo: new Date().getTime(),
            img:'https://ikedaharket.com/paginas/Completa1/img/TeVerde.jpg',
            titulo:'Te verde',
            texto:'Este es un te muy rico pero no se por que es verde',
            alt: 'nombre',
            carrusel:false,
        },
        {
            codigo: '1234',
            img:'https://ikedaharket.com/paginas/Completa2/img/fondo2.jpg',
            titulo:'Anime',
            texto:'No conosco este anime pero da igual',
            alt: 'nombre',
            carrusel:false,
        }
        ,
        {
            codigo: '111',
            img:'https://www.ikedaharket.com/img/carousel/1.jpg',
            titulo:'Cubito Rubik',
            texto:'Este cubo solo lo he podido armar 2 veces',
            alt: 'nombre',
            carrusel:true,
        }
        ,
        {
            codigo: '222',
            img:'https://www.ikedaharket.com/img/carousel/2.jpg',
            titulo:'Mi PC',
            texto:'Una foto antigua de mi computadora',
            alt: 'nombre',
            carrusel:true,
        }
        ,
        {
            codigo: '333',
            img:'https://www.ikedaharket.com/img/carousel/3.jpg',
            titulo:'Hoja',
            texto:'Esta foto motivo que me gustara sacar fotos de cosas random, fue cuando estudiaba electricidad en el liceo.',
            alt: 'nombre',
            carrusel:true,
        },
        {
            codigo: '444',
            img:'https://www.ikedaharket.com/img/carousel/4.jpg',
            titulo:'Motorcito',
            texto:'Un motorcito que parece perro',
            alt: 'nombre',
            carrusel:true,
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