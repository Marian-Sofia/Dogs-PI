const { Router } = require('express');
const getDogsRouter = require('../routes/Dogs/getDogs');
const postDogsRouter = require('./Dogs/postDogs');
const putDogsRouter = require('./Dogs/putDogs');
const deleteDogsRouter = require('./Dogs/deleteDogs');
const getTemperamentRouter = require('./Temperaments/getTemperament')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');




const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// GET DOGS 
router.use('/dogs', getDogsRouter)
// POST DOGS 
router.use('/dogs', postDogsRouter )
// PUT DOGS
router.use('/dogs', putDogsRouter )
// DELETE DOGS
router.use('/dogs', deleteDogsRouter )

// GET TEMPERAMENTS 
router.use('/temperament', getTemperamentRouter)

module.exports = router;
