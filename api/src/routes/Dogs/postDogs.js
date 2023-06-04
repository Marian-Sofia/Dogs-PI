const postDogsRouter = require('express').Router();
const { postDogs } = require('../Controllers/controllers')
// const { Dogs } = require('../../db')

postDogsRouter
// post dogs 
.post('/', async (req, res) => {
    
    try {
        
        const { name, height, weight, life_span, image, temperament } = req.body
        const data = await postDogs(name, height, weight, life_span, image, temperament)

        return res.status(200).json({ message: data })
        
    } catch ({ message }) {
        return res.status(404).send(message)
    }

})

module.exports = postDogsRouter