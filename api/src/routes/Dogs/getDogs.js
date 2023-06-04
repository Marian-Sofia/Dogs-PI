const getDogsRouter = require('express').Router();
// const { Dogs } = require('../../db')
const { getDogs } = require('../Controllers/controllers')

getDogsRouter
// ruta por raza y name
.get('/', async (req, res) => {

  try {

    const data = await getDogs()

    return res.status(200).json(data)

  } catch ({ message }) {
    return res.status(404).send(message)
  }

})
// ruta por id
.get('/:id', (req, res) => {

})
module.exports = getDogsRouter