const {Country, Activity}= require('../db');
const axios = require('axios');
const { Op } = require('sequelize');


async function createAct(req, res, next) {
    const {name, difficulty, time, seasons, countries} = req.body;
    try {
    if (name && difficulty && time && seasons && countries) {
        const createA = await Activity.create({
            name: name,
            difficulty: difficulty,
            time: time,
            seasons: seasons
        })

        countries.forEach(i => {
            return createA.addCountry(i)
        });
        res.status(201).send('Activity created')
    } else {
        res.status(404).send('Missing Data')
    }
    } catch (error) {
        next(error)
    }
}

async function getAllActivities (req, res, next) {
    try {
        const bring = await Activity.findAll();
        res.send(bring)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createAct,
    getAllActivities
}