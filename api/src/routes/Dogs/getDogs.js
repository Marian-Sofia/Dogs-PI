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

    const { id } = req.params

    const source = isNaN(id) ? 'DB' : 'API'

    const data = await getDogsById(id, source)

    return res.status(200).json(data)
    
  } catch ({ message }) {
    return res.status(404).send({ error : message })
  }

})
module.exports = getDogsRouter