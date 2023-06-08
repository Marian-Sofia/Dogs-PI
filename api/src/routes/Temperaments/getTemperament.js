const { getTemperament } = require('../Controllers/controllers');
const { Temperaments } = require('../../db')

const getTemperamentRouter = require('express').Router();

getTemperamentRouter
.get('/', async ( req, res ) => {
    try {

        // Se busca el ultimo ID de la tabla temperaments en la DB en este caso 124
        const temperament = await Temperaments.findByPk(124)

        // Si ese temperamento no existe se ejcuta la funcion que los trae y se cargan en la DB
        if(!temperament){
            await getTemperament();
        }   

        const data = await Temperaments.findAll()

        return res.status(200).json(data)

    } catch ({ message }) {
        return res.status(404).json({ error: message })
    }
})

module.exports = getTemperamentRouter

