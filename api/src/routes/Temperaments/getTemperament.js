const { getTemperament } = require('../Controllers/controllers');

const getTemperamentRouter = require('express').Router();

getTemperamentRouter
.get('/', async ( req, res ) => {
    try {
        const data = await getTemperament();

        return res.status(200).json(data)

    } catch ({ message }) {
        return res.status(404).json({ error: message })
    }
})

module.exports = getTemperamentRouter

