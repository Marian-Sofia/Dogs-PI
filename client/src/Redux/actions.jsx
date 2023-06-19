// Se exportan las action_types para poderlas definir en el type del dispatch
import {
    GET_DOGS,
    GET_DOGS_NAME,
    POST_DOGS,
    PUT_DOGS,
    DELETE_DOGS,
    DETAIL_DOGS,
    GET_TEMPERAMENTS,
} from './action-types'

// Se crean las funciones que hacen un fetch al Back-End
export const getDogs = () => {
    return async function (dispatch) {
            const res = await fetch('http://localhost:3001/dogs')
            const data = await res.json()
            dispatch({ type: GET_DOGS, payload: data }) 
    }
}

export const dogsName = (name) => {
    return async function (dispatch) {
        const res = await fetch(`http://localhost:3001/dogs?name=${name}`)
        const data = await res.json()
        dispatch({ type: GET_DOGS_NAME, payload: data })
    }
}

export const postDogs = (dog) => {
    return async function (dispatch) {
        console.log(dog);
        const res = await fetch('http://localhost:3001/dogs', {
            method: 'POST',
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            },
            body: JSON.stringify(dog)
        })
        const data = await res.json()
        console.log(data);
        dispatch({ type: POST_DOGS, payload: data })
    }
}

export const putDogs = (dog) => {
    return async function (dispatch) {
        console.log(dog);
        const res = await fetch('http://localhost:3001/dogs', {
            method: 'PUT',
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            },
            body: JSON.stringify(dog)
        })
        const data = await res.json()
        console.log(data);
        dispatch({ type: PUT_DOGS, payload: data })
    }
}

export const deleteDogs = (id) => {
    return async function (dispatch) {
        const res = await fetch(`http://localhost:3001/dogs/${id}`, {
            method: 'DELETE'
        }) 
        const data = await res.json()
        console.log(data);
        dispatch({ type: DELETE_DOGS, payload: data })
    }
}


export const detailDogs = (id) => {
    return async function (dispatch) {
        const res = await fetch(`http://localhost:3001/dogs/${id}`)
        const data = await res.json()
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