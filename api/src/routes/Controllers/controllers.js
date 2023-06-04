const { Dog, Temperaments } = require('../../db')
// const { URL_API } = require('dotenv').config().parsed;

const { cleanArrayDogs } = require("../../Auxiliar/auxiliar");



//      CRUD DOGS

// GETDOGS
const getDogs = async () => {

    // Se extraen los datos de la api mediante un fetch
    const res = await fetch('https://api.thedogapi.com/v1/breeds')
    const data = await res.json()

    // Se limpia el array de datos para traer solo los datos de interes
    const dataAPI = cleanArrayDogs(data) 

    // Se extraen los datos de la DB
    const dataDB = await Dog.findAll()

    // Se unen los datos de la API y la DB usando el Spreed Operator
    const results = [...dataDB,...dataAPI]

    // Condicional donde se maneja el error
    if(!results) throw Error('Breed not found')

    // Se retorna la union de las data
    return results 

}
// GETDOGS por raza
const getDogsByBreed = () => {

}
// GETDOGS por id
const getDogsById = () => {

}


// POSTDOGS
const postDogs = async ( name, height, weight, life_span, image, temperament ) => {

    if(!name || !height || !weight || !life_span || !image || !temperament) throw Error('There are mandatory fields not completed');

    const newDog = await Dog.create({
        name,
        height,
        weight,
        life_span,
        image,
        temperament,
    })

    return 'The Dog was created successfully'
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