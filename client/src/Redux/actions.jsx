// Se exportan las action_types para poderlas definir en el type del dispatch
import {
    GET_DOGS,
    POST_DOGS,
    PUT_DOGS,
    DELETE_DOGS,
    DETAIL_DOGS,
    GET_TEMPERAMENTS,
} from './action-types'

// Se crean las funciones que hacen un fetch al Back-End

// Se crea la funcion get por nombre y busqueda general manejandolo con un condicional
export const getDogs = (name) => {
    return async function (dispatch) {
            if(name){
                const res = await fetch(`http://localhost:3001/dogs?name=${name}`)
                const data = await res.json()
                dispatch({ type: GET_DOGS, payload: data })
            }
            else {
                const res = await fetch('http://localhost:3001/dogs')
                const data = await res.json()
                dispatch({ type: GET_DOGS, payload: data }) 
            }
    }
}

// Se crea la funcion que busca por ID para el Detail
export const detailDogs = (id) => {
    return async function (dispatch) {
        const res = await fetch(`http://localhost:3001/dogs/${id}`)
        const data = await res.json()
        console.log(data);
        dispatch({ type: DETAIL_DOGS, payload: data })
    }
}

// Se hace el fetch para buscar los temperaments en la DB
export const getTemperaments = () => {
    return async function (dispatch) {
        const res = await fetch('http://localhost:3001/temperament')
        const data = await res.json()
        dispatch({ type: GET_TEMPERAMENTS, payload: data })
    }
}