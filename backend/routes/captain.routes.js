const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../Controllers/captain.controller');

router.post('/register', [
    body('email').isEmail().withMessage('Please use a valid email address'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').notEmpty().withMessage('Vehicle color is required'),
    body('vehicle.plate').notEmpty().withMessage('Vehicle plate number is required'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Vehicle capacity must be a positive integer'),
    body('vehicle.vehicleType').isIn(['car', 'auto', 'motorcycle']).withMessage('Vehicle type must be either car, auto, or motorcycle'),
], captainController.registerCaptain);

module.exports = router;