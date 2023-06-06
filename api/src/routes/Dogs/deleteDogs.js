const deleteDogsRouter = require('express').Router();
const { deleteDogs } = require('../Controllers/controllers');

deleteDogsRouter
// delete dogs 
.delete('/:id', async (req, res) => {
    
    try {
        
        const { id } = req.params
        const data = await deleteDogs(id)

        return res.status(200).json({ message: data })
        
    } catch ({ message }) {
        return res.status(400).send(message)
    }
})

module.exports = deleteDogsRouter