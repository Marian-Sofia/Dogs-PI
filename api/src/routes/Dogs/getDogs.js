const getDogsRouter = require('express').Router();
const { getDogs, getDogsByBreed, getDogsById } = require('../Controllers/controllers')

getDogsRouter
// Ruta por todas las razas y por el nombre de una raza en especifico
.get('/', async (req, res) => {

  try {
    // Se hace una request de el nombre por query
    const { name } = req.query

    // Se evalua si name existe, si esta, se ejecuta la funcion que busca por el nombre de la raza de el perro
    if(name){
      const dataName = await getDogsByBreed(name)
      return res.status(200).json(dataName)
    } 

    // Se trae la funcion que hace un get general de todas las razas y se ejecuta
    const dataApi = await getDogs()
    return res.status(200).json(dataApi)

  } catch ({ message }) {
    return res.status(404).send({ error: message})
  }

})
// Ruta para traer por ID
.get('/:id', async (req, res) => {

  try {

    // se trae el ID por params
    const { id } = req.params

    // Se hace un ternario que servira para saber en que lugar se debe buscar el perro, si es en la DB el ID sera un UUID, si es API el ID sera un INTEGER
    const source = isNaN(id) ? 'DB' : 'API'

    // Se le pasan por parametros el ID que se busca y el Source para decirle a la funcion donde tiene que buscar 
    const data = await getDogsById(id, source)

    return res.status(200).json(data)
    
  } catch ({ message }) {
    return res.status(404).send({ error : message })
  }

})

module.exports = getDogsRouter