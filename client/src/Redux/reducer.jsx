// Se importan las action_types para hacer un manejo de ellas 
import { DETAIL_DOGS, GET_DOGS, GET_TEMPERAMENTS } from "./action-types";

// Se crea el estado inicial con las propiedades a las que se les va a añadir la data que se obtiene del Back-End
const initialState = {
    dogs: [],
    detailDogs: {},
    temperaments: [],
}

// Se crea la funcion reducer en donde se hace manejo de el estado inicial y del dispatch
const reducer = (state = initialState, { type, payload }) => {
    switch (type){
        case GET_DOGS:
            return {
                ...state,
                dogs: payload
            }
    
        case DETAIL_DOGS:
            return {
                ...state,
                detailDogs: payload
            }
        
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: payload
            }

        default:
            return {...state}
    }
}

export default reducer;