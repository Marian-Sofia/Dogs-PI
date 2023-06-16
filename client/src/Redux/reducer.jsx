// Se importan las action_types para hacer un manejo de ellas 
import { 
    DETAIL_DOGS, 
    GET_DOGS, 
    GET_DOGS_NAME, 
    GET_TEMPERAMENTS, 
    POST_DOGS} from "./action-types";

// Se crea el estado inicial con las propiedades a las que se les va a añadir la data que se obtiene del Back-End
const initialState = {
    dogs: [],
    dogsName: [],
    detailDogs: {},
    temperaments: [],
    message: {},
}

// Se crea la funcion reducer en donde se hace manejo de el estado inicial y del dispatch
const reducer = (state = initialState, { type, payload }) => {
    switch (type){
        case GET_DOGS:
            return {
                ...state,
                dogs: payload
            }

        case GET_DOGS_NAME:
            return {
                ...state,
                dogsName: payload
            }

        case POST_DOGS:
            return {
                ...state,
                mesage: payload
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