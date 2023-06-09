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

    // Se usa el metodo findAll para buscar por name en los perros creados en la DB
    const dataDB = await Dog.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        }, 
        // Se incluye la tabla de temperamentos en la busqueda
        include: {
            model: Temperaments,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })

    // Se hace el fetch a la API con la query y le pasamos el name 
    const res = await fetch(`${URL_API}search?name=${name}&key=${API_KEY}`)
    const data = await res.json()

    // Se limpia la data para traer los datos necesarios
    const dataAPI = cleanArrayDogs(data)

    // Se unen los datos de la DB y los de la API
    const results = [...dataDB, ...dataAPI]

    // Se hace el manejo del error y se lanza un mensaje 
    if(!results) throw Error('Breed not found')

    // Se retorna el array con la copia de las datas
    return results

}
// GETDOGS -- funcion que busca por id
const getDogsById = async (id, source) => {

    // Se hace un condicional evaluando si source (un ternario que se creo en la ruta) es igual a 'API', esto quiere decir que la busqueda que se esta haciendo por ID es un entero
    if(source === 'API'){
        // Si es igual a API este hace la peticion a la API y busca por ID
        const res = await fetch(`${URL_API}${id}`)
        const data = await res.json()
        
        // Se maneja el error y se lanza un mensaje 
        if(!data) throw Error('The ID does not exist')

        // se retorna el objeto que recoge solo los datos de importancia 
        return cleanDogs(data)

    } else {
        
       // Si source no es igual a 'API', quiere decir que es igual a 'DB', esto indica que el numero que se esta buscando por ID no es un entero y mas bien es un IDentificador Unico Universal (UUID) 
        const data = await Dog.findOne({
            // Por lo tanto se busca en la DB el perro que tenga ese ID unico
            where: { id },
            include: {
                // Y nuevamente se incluye la tabla de temperaments
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

    // constante que busca en la tabla de temperaments donde el nombre coincida con el que se requiere en el body del post 
    const find = await Temperaments.findAll({
        where: {
            name: temperament
        }
    })

    // Se enlazan las dos tablas para que cada perro coincida con un temperamento de la tabla creada en la DB
    await newDog.addTemperaments(find)

    // Mensaje de que el objeto se ha creado correctamente en la DB
    return 'The Dog was created successfully'
}


// PUTDOGS -- funcion que sirve para editar los perros creados en la DB
const putDogs = async ( id, name, height, weight, life_span, image, temperament ) => {

    // Con un metodo se le indica a la tabla de la DB donde se guardan los perros creados, que tributos fueron cambiados y se actualizan, si alguno no cambio se dejan los datos que ya tenia
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

    // Se retorna un mensaje de exito
    return 'The dog was edited successfully'
}


// DELETEDOGS -- funcion para eliminar a los perros creados por la DB
const deleteDogs = async (id) => {
 
    // Con un metodo se logra identrificar por ID el perro que se quiere eliminar
    await Dog.destroy({
        where: { id }
    })

    // Se retorna un mensaje de exito
    return 'The dog was deleted successfully'
}



//      TEMPERAMENTS

// GETTEMPERAMENTS -- funcion que busca el temperamento de los perros
const getTemperament = async () => {

    // Se hace la peticion a la API mediante un fetch
    const res = await fetch(`${URL_API}`)
    const data = await res.json()

    // Se hace un for of que recorra cada elemento de data, estos son strings de muchas palabras separados por comas en un array
    for(const element of data ){
        //Se evalua si existe el temperamento
        if(element.temperament){
            // Se separan por comas las palabras para que asi quede una por una dentro del array
            const clean = element.temperament.split(',')
            // Con otro for of se recore por cada item(palabra) de la constante clean
            for(const item of clean){
                // Con un metodo se busca el item y si no esta se crea en la tabla de la DB donde el registro 'name' sea el item
                await Temperaments.findOrCreate({
                    where:{
                        name: item.trim(),
                    },
                })
            }
        }
    }

    return 
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