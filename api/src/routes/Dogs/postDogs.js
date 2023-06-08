const postDogsRouter = require('express').Router();
const { postDogs } = require('../Controllers/controllers');

postDogsRouter
// post dogs 
.post('/', async (req, res) => {
    
    try {
        
        // Se hace una request por body de los datos que se requieren para la creacion de un nuevo prro en la DB 
        const { name, height, weight, life_span, image, temperament } = req.body

        // Se llama la funcion que los crea y se le pasan esos datos
        const data = await postDogs(name, height, weight, life_span, image, temperament)

        return res.status(201).json({ message: data })
        
    } catch ({ message }) {
        return res.status(404).send(message)
    }

})

module.exports = postDogsRouter