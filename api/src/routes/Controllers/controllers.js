const { Dog, Temperaments } = require('../../db')
const { URL_API, API_KEY } = require('dotenv').config().parsed;
const { Op } = require('sequelize')

const { cleanArrayDogs, cleanDogs } = require("../../Auxiliar/auxiliar");



//      CRUD DOGS

// GETDOGS -- funcion que trae a todos los perros tanto de la DB como de la API
const getDogs = async () => {

    // Se extraen los datos de la api mediante un fetch
    const res = await fetch(`${URL_API}`)
    const data = await res.json()

    // Se limpia el array de datos para traer solo los datos de interes
    const dataAPI = cleanArrayDogs(data) 

    // Se extraen los datos de la DB
    const dataDB = await Dog.findAll({
        include: {
            model: Temperaments,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })

    // Se unen los datos de la API y la DB usando el Spreed Operator
    const results = [...dataDB,...dataAPI]

    // Condicional donde se maneja el error
    if(!results) throw Error('The Dog was not found')

    // Se retorna la union de las data
    return results 

}
// GETDOGS -- funcion que busca por el nombre de la raza
const getDogsByBreed = async (name) => {


    const dataDB = await Dog.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        },
        include: {
            model: Temperaments,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
    const res = await fetch(`${URL_API}search?name=${name}&key=${API_KEY}`)
    const data = await res.json()
    const dataAPI = cleanArrayDogs(data)
    const results = [...dataDB, ...dataAPI]

    if(!results) throw Error('Breed not found')

    return results

}
// GETDOGS -- funcion que busca por id
const getDogsById = async (id, source) => {

    if(source === 'API'){
        const res = await fetch(`${URL_API}${id}`)
        const data = await res.json()

        if(!data || !data.length) throw Error('The ID does not exist')


        return cleanDogs(data)

    } else {
        
        const data = await Dog.findOne({
            where: { id },
            include: {
                model: Temperaments,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })

        return data

    }
}


// POSTDOGS -- funcion que crea los perros en la DB con un id unico
const postDogs = async ( name, height, weight, life_span, image, temperament ) => {

    // Condicional donde se maneja el error y se envia el mensaje 
    if(!name || !height || !weight || !life_span || !image || !temperament) throw Error('There are mandatory fields not completed');

    // Objeto con los datos que debe llevar el body del post para crearlo en la DB
    const newDog = await Dog.create({
        name,
        height,
        weight,
        life_span,
        image,
        temperament,
    })

    // Mensaje de que el objeto se ha creado correctamente en la DB
    return 'The Dog was created successfully'
}


// PUTDOGS -- funcion que sirve para editar los perros creados en la DB
const putDogs = async ( id, name, height, weight, life_span, image, temperament ) => {

    await Dog.update({
        name,
        height,
        weight,
        life_span,
        image,
        temperament
    }, {
        where: { id }
    })

    

    return 'The dog was edited successfully'

}


// DELETEDOGS -- funcion para eliminar a los perros creados por la DB
const deleteDogs = async (id) => {
 
    await Dog.destroy({
        where: { id }
    })

    return 'The dog was deleted successfully'
}



//      TEMPERAMENTS

// GETTEMPERAMENTS -- funcion que busca el temperamento de los perros
const getTemperament = async () => {

    const set = new Set();

   const res = await fetch(`${URL_API}`)
   const data = await res.json()

   const dataMap = data.map( value => set.add(value.temperament))
   console.log(set)

}




module.exports ={
    getDogs,
    getDogsByBreed,
    getDogsById,
    postDogs,
    putDogs,
    deleteDogs,
    getTemperament
}