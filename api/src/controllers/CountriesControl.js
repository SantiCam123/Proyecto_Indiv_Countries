const {Country}= require('../db');
const axios = require('axios');

async function putDataInDb(req, res, next) {
    try {
    const api = await axios('https://restcountries.com/v3/all');
    const bring = await api.data.map(i => {
        return {
        id: i.cca3,
        name: i.name.official,
        image: i.flags[1],
        continent: i.continents[0],
        capital: i.capital?.[0],
        sub_Reg: i.subregion,
        area: i.area,
        population: i.population
    }
    })
    await Country.bulkCreate(bring);
    console.log('Base de datos creada con exito');
    } catch (error) {
        console.log(error)
    }
}

async function getAllCountries(req, res, next) {
    try {
        const api = await axios('https://restcountries.com/v3/all');
        const bring = await api.data.map(i => {
            return {
            name: i.name.official,
            image: i.flags[1],
            continent: i.continents[0],
        }
        })
        res.send(bring);
        } catch (error) {
            next(error)
        }
}

module.exports = {
    putDataInDb,
    getAllCountries
}

/* 
            id: i.cca3,
            capital: i.capital?.[0],
            sub_Reg: i.subregion,
            area: i.area,
            population: i.population
*/