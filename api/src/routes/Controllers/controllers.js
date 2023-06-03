// const { Dogs, Temperaments } = require('../../db')
// const { URL_API } = require('dotenv').config().parsed;

const { cleanArrayDogs } = require("../../Auxiliar/auxiliar");



//      CRUD DOGS

// GETDOGS
const getDogs = async () => {

    const res = await fetch('https://api.thedogapi.com/v1/breeds')
    const results = await res.json()
    const clean = cleanArrayDogs(results) 
    console.log(results.length);

    if(!results) throw Error('No hay perros mor')
    return clean


}
// GETDOGS por raza
const getDogsByBreed = () => {

}
// GETDOGS por id
const getDogsById = () => {

}


// POSTDOGS
const postDogs = () => {

}


// PUTDOGS
const putDogs = () => {

}


// DELETEDOGS
const deleteDogs = () => {

}



//      TEMPERAMENTS

// GETTEMPERAMENTS
const getTemperaments = () => {

}




module.exports ={
    getDogs,
    getDogsByBreed,
    getDogsById,
    postDogs,
    putDogs,
    deleteDogs,
    getTemperaments
}