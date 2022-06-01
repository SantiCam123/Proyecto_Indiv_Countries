const {Country, Activity}= require('../db');
const axios = require('axios');
const { Op } = require('sequelize');


async function putDataInDb() {
    try {
    const api = await axios('https://restcountries.com/v3/all');
    const bring = await api.data.map(i => {
        return {
        id: i.cca3,
        name: i.name.common,
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
    const {name} = req.query;
    try {
        if(name) {
            const bringD = await Country.findAll({
                where: {
                   name: {
                       [Op.iLike]: `%${name}%`
                    }
                },
                include: {
                    model: Activity,
                    attributes: ['name', 'difficulty', 'time', 'seasons'],
                    through: {
                        attributes: [],
                    }
                  }
            });
            if (bringD.length === 0) {
                res.status(404).send(`The name: ${name} was not found. Rewrite it and try again`)
            } else {
                res.status(200).json(bringD);   
            }
        } else {
        const bring = await Country.findAll({
            order: [
                ['name', 'ASC']
            ],
            include :{
              model: Activity,  
            }
        })
        res.send(bring);
    }
    } catch (error) {
        next(error)
    }
}

async function getCountryById(req, res, next) {
    const idC = req.params.id.toUpperCase();
    try {
    const bringC = await Country.findAll({
        where: {
            id: idC
        },
        include: [{
          model: Activity,
          attributes: ['name', 'difficulty', 'time', 'seasons'],
          through: {
              attributes: [],
          }
        }]
    });
    if (bringC.length === 0) {
        res.status(404).send(`The ID: ${idC} does not exist.`)
    } else {
        res.send(bringC)  
    }
    } catch (error) {
        next(error)
    }
}


module.exports = {
    putDataInDb,
    getAllCountries,
    getCountryById
}


// async function getAllCountries(req, res, next) {
//     try {
//         const api = await axios('https://restcountries.com/v3/all');
//         const bring = await api.data.map(i => {
//             return {
//             name: i.name.official,
//             image: i.flags[1],
//             continent: i.continents[0],
//         }
//         })
//         res.send(bring);
//         } catch (error) {
//             next(error)
//         }
// }