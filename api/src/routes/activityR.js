const { Router } = require('express');
const {Activity} = require('../db');
const axios = require('axios');
const {createAct, getAllActivities} = require('../controllers/ActivityControl.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/', createAct);
router.get('/', getAllActivities);



module.exports = router;
