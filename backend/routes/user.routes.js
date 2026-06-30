const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const usercontroller = require('../Controllers/user.controller');

router.post('/register', [
    body('fullName.firstname').notEmpty().withMessage('First name is required'),
    body('fullName.lastname').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullName, email, password } = req.body;
    const user = new UserModel({ fullName, email, password });
    user.save();
    res.status(201).json({ message: 'User registered successfully' });
});


module.exports = router;