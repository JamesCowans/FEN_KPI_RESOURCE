const express = require('express');
const router = express.Router();

//POST /api/auth/register

router.post('/register', (req, res) => {
    //TODO: validate input, hash password, save user, issue JWT
    res.status(501).json({message: 'Register not implemented yet'});
});

//POST /api/auth/login

router.post('/login', (req, res) => {
    //TODO: validate input, check credentials, issue JWT
    res.status(501).json({message: 'Login not implemented yet' });
});


module.exports = router;