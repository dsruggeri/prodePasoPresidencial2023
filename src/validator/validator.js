const { validationResult, body } = require('express-validator');
require('dotenv').config();

const validateInput = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        res.status(400).send({errors: errors.array()});
    };

    next();
};

const loginValidation = [
    body('email' === process.env.USER)
    .isEmail(),
    body('password' === process.env.PASSWORD)
];

module.exports = { validateInput, 
    loginValidation }