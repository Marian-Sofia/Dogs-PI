// Se importan las action_types para hacer un manejo de ellas 
import { 
    ASCENTDANT_SORT,
    DELETE_DOGS,
    DESCENDING_SORT,
    DETAIL_DOGS, 
    GET_DOGS, 
    GET_DOGS_NAME, 
    GET_TEMPERAMENTS, 
    POST_DOGS,
    PUT_DOGS,
    WEIGHT_MIN,
    WEIGHT_MAX,
    TEMP,
    API,
    DB,
    REFRESH,
    RESET,
    REFRESH_MSG
} from "./action-types";

// Se crea el estado inicial con las propiedades a las que se les va a añadir la data que se obtiene del Back-End
const initialState = {
    dogs: [],
    dogsName: [],
    detailDogs: {},
    temperaments: [],
    postMsg: {},
    putMsg: {},
    deleteMsg: {},
    filter: [],
    dogsCopy: [], 
}

// Se crea la funcion reducer en donde se hace manejo de el estado inicial y del dispatch
const reducer = (state = initialState, { type, payload }) => {
    switch (type){
        case GET_DOGS:
            return {
                ...state,
                dogs: payload,
                dogsCopy: payload
            }

        case GET_DOGS_NAME:
            return {
                ...state,
                dogsName: payload
            }

        case DETAIL_DOGS:
            return {
                ...state,
                detailDogs: payload
            }

        case POST_DOGS:
            return {
                ...state,
                postMsg: payload
            }
    
        case PUT_DOGS:
            return {
                ...state,
                putMsg: payload
            }

        case DELETE_DOGS:
            return {
                ...state,
                deleteMsg: payload
            }
        
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: payload
            }

        case ASCENTDANT_SORT:
            return {
                ...state,
                dogs: payload,
                filter: payload
            }
            
        case DESCENDING_SORT:
            return {
                ...state,
                dogs: payload,
                filter: payload
            }

        case WEIGHT_MIN:
            return {
                ...state,
                dogs: payload,
                filter: payload
            }

        case WEIGHT_MAX: 
            return {
                ...state,
                dogs: payload,
                filter: payload
            }

        case TEMP:
            return {
                ...state,
                dogs: payload,
                filter: payload
            }

        case API:
            return {
                ...state,
                dogs: payload,
                filter: payload
            }
        
        case DB:
            return {
                ...state,
                dogs: payload,
                filter: payload
            }

        case RESET: 
            return {
                ...state,
                dogs: [],
                dogsName: {},
                filter: [],
            }

        case REFRESH: 
            return {
                ...state,
                detailDogs: {}
            }

        case REFRESH_MSG:
            return {
                ...state,
                postMsg: payload,
                putMsg: payload,
                deleteMsg: payload,
            }

        default:
            return {...state}
    }
}

export default reducer;