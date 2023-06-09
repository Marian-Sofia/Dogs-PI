import { DETAIL_DOGS, GET_DOGS, GET_TEMPERAMENTS } from "./action-types";

const initialState = {
    dogs: [],
    detailDogs: [],
    temperaments: [],
}

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