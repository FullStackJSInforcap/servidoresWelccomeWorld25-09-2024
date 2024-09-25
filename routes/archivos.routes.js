const { Router } = require('express');
const { crear, leer, renombrar, eliminar } = require('../controllers/archivos.controllers');

const router = Router();

router.get('/crear', crear);

router.get('/leer', leer);

router.get('/renombrar', renombrar);

router.get('/eliminar', eliminar);

module.exports = router;