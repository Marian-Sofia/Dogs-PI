const { getTemperament } = require('../Controllers/controllers');
const { Temperaments } = require('../../db')

const getTemperamentRouter = require('express').Router();

getTemperamentRouter
.get('/', async ( req, res ) => {
    try {
        const temperament = await Temperaments.findByPk(124)

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

