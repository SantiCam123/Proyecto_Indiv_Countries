const { Router } = require('express');
const {Country}= require('../db');
const axios = require('axios');
const { getAllCountries } = require('../controllers/CountriesControl');

// Importar todos los routers;
const router = Router();
// Ejemplo: const authRouter = require('./auth.js');
router.get('/', getAllCountries)




module.exports = router;
