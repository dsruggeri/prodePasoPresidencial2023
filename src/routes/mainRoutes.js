const express = require('express');

const router = express.Router();

const controller = require('../controllers/controller');


router.get('/', controller.home);
router.post('/votar', controller.votar);
router.get('/admin', controller.admin);
router.get('/login', controller.login);
router.post('/votos', controller.votos);



module.exports = router;