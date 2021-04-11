import { types } from "../types/types";

const initialState = {
    habilidades:[
        {
            id:1,
            color:'#00ff43',
            nombre:'HTML',
            porcentaje:'90'
        },
        {
            id:2,
            color:'#00a1ff',
            nombre:'CSS',
            porcentaje:'90'
        },
        {
            id:3,
            color:'#ff04f7',
            nombre:'JAVASCRIPT',
            porcentaje:'80'
        },
        {
            id:4,
            color:'#7377ad',
            nombre:'PHP',
            porcentaje:'60'
        },
        {
            id:5,
            color:'#ffe81c',
            nombre:'MYSQL',
            porcentaje:'70'
        },
        {
            id:6,
            color:'#bf4080',
            nombre:'SASS',
            porcentaje:'65'
        },
        {
            id:7,
            color:'#61dafb',
            nombre:'REACT',
            porcentaje:'80'
        },
        {
            id:8,
            color:'#026e00',
            nombre:'NODE.JS',
            porcentaje:'65'
        },
        {
            id:9,
            color:'#7300c0',
            nombre:'BOOTSTRAP',
            porcentaje:'65'
        },
    ]
}

export const habilidadReducer = (state = initialState , action)=>{

    switch (action.type) {
        case types.habilidadListar:
            return
        default:    
            return state;
    }
}