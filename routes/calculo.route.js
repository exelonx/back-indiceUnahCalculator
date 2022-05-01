const { Router } = require('express');
const { calculoGlobal } = require('../controllers/calculo.controller');

const router = Router();

router.post('/Global', calculoGlobal)

module.exports = router;