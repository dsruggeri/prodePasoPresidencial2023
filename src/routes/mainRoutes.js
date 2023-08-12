const express = require('express');

const router = express.Router();

const validateInput = require('../validator/validator');
const loginValidation = require('../validator/validator');
const { body } = require('express-validator');

const controller = require('../controllers/controller');


router.get('/', controller.home);
router.post('/votar', controller.votar);
//router.get('/gracias', controller.gracias);
router.get('/admin', controller.admin);
router.get('/login', controller.login);
router.post('/votos', controller.votos);
//router.get('/entrar');


module.exports = router;