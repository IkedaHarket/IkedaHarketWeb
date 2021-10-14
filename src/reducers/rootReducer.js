import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { habilidadReducer } from "./habilidadReducer";
import { imgReducer } from "./imgReducer";
import { paginaReducer } from "./paginaReducer";

import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    ui:uiReducer,
    img:imgReducer,
    habilidad:habilidadReducer,
    auth:authReducer,
    pagina:paginaReducer,
    
})