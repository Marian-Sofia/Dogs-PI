const deleteDogsRouter = require('express').Router();
const { deleteDogs } = require('../Controllers/controllers');

deleteDogsRouter
// delete dogs 
.delete('/:id', async (req, res) => {
    
    try {
        
        // Se busca el ID por params para saber que perro eliminar
        const { id } = req.params

        // se ejecuta la funcion que elimina y se le pasa el ID
        const data = await deleteDogs(id)

        return res.status(200).json({ message: data })
        
    } catch ({ message }) {
        return res.status(400).send(message)
    }
})

module.exports = deleteDogsRouter