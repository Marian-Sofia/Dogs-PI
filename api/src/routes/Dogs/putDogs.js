const putDogsRouter = require('express').Router();
const { putDogs } = require('../Controllers/controllers')

putDogsRouter
// put dogs 
.put('/', async (req, res) => {
    
    try {
        
        // Se hace la request por body de los datos que podrian ser editados en los perros de la DB
        const { id, name, height, weight, life_span, image, temperament } = req.body

        // Se ejecuta la funcion y se le pasan los datos
        const data = await putDogs(id, name, height, weight, life_span, image, temperament)

        return res.status(200).json({ message: data })
        
    } catch ({ message }) {
        return res.status(400).send(message)
    }

})

module.exports = putDogsRouter