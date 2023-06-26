// Se exportan las action_types para poderlas definir en el type del dispatch
import {
    GET_DOGS,
    GET_DOGS_NAME,
    POST_DOGS,
    PUT_DOGS,
    DELETE_DOGS,
    DETAIL_DOGS,
    GET_TEMPERAMENTS,
    DESCENDING_SORT,
    ASCENTDANT_SORT,
    WEIGHT_MIN,
    WEIGHT_MAX,
    TEMP,
    API,
    DB,
    REFRESH,
    RESET,
    REFRESH_MSG
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
        const res = await fetch('http://localhost:3001/dogs', {
            method: 'POST',
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            },
            body: JSON.stringify(dog)
        })
        const data = await res.json()
        dispatch({ type: POST_DOGS, payload: data })
    }
}

export const putDogs = (dog) => {
    return async function (dispatch) {
        const res = await fetch('http://localhost:3001/dogs', {
            method: 'PUT',
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            },
            body: JSON.stringify(dog)
        })
        const data = await res.json()
        dispatch({ type: PUT_DOGS, payload: data })
    }
}

export const deleteDogs = (id) => {
    return async function (dispatch) {
        const res = await fetch(`http://localhost:3001/dogs/${id}`, {
            method: 'DELETE'
        }) 
        const data = await res.json()
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

export const getTemperaments = () => {
    return async function (dispatch) {
        const res = await fetch('http://localhost:3001/temperament')
        const data = await res.json()
        dispatch({ type: GET_TEMPERAMENTS, payload: data })
    }
}

export const ascentdant = (state) => {
    const ascentdantSort = state.slice().sort( (a, b) => 
    a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1 )

    return function (dispatch) {
        dispatch({ type: ASCENTDANT_SORT, payload: ascentdantSort })
    }
}

export const descending = (state) => {
    const descendingSort = state.slice().sort( (a, b) => 
    a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1 )

    return function (dispatch) {
        dispatch({ type: DESCENDING_SORT, payload: descendingSort })
    }
}

export const weightMin = (state) => {
    const min = state.slice().sort( (a, b) => 
    a.weight < b.weight ? -1 : 1)
    console.log(min);
    return function (dispatch) {
        dispatch({ type: WEIGHT_MIN, payload: min})
    }
}

export const weightMax = (state) => {
    const max = state.slice().sort( (a, b) => 
    a.weight > b.weight ? -1 : 1)
    console.log(max);

    return function (dispatch) {
        dispatch({ type: WEIGHT_MAX, payload: max})
    }
}

export const filterTemps = (state, t) => { console.log(state);
    const filter = state.slice().filter( temp => 
        temp.temperaments.map( temperament => temperament.name).includes(t))
    return function (dispatch) {
        dispatch({ type: TEMP, payload: filter})
    }
}

export const api = (state) => {
    const filter = state.slice().filter( dog => 
        typeof(dog.id) === 'number')

    return function (dispatch) {
        dispatch({ type: API, payload: filter })
    }
}

export const db = (state) => {
    const filter = state.slice().filter( dog => 
        typeof(dog.id) === 'string')

    return function (dispatch) {
        dispatch({ type: DB, payload: filter})
    }
}

export const reset = () => {
    return function (dispatch) {
        dispatch({ type: RESET, payload: {} })
    }
}

export const refresh = () => {
    return function (dispatch) {
        dispatch({ type: REFRESH, payload: {} })
    }
}

export const resetMsg = () => {
    return function (dispatch) {
        dispatch({ type: REFRESH_MSG, payload: {} })
    }
}