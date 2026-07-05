const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const usercontroller = require('../Controllers/user.controller');

router.post('/register', [
    body('fullName.firstName').notEmpty().withMessage('First name is required'),
    body('fullName.lastName').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], usercontroller.register);


router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').notEmpty().withMessage('Password is required'),
], usercontroller.loginUser);

module.exports = router;