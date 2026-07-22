const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');

router.post('/register', [
    body('fullName.firstName').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('fullName.lastName').isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please use a valid email address'),
    body('vehicle.color').notEmpty().withMessage('Vehicle color is required'),
    body('vehicle.plateNumber').notEmpty().withMessage('Vehicle plate number is required'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Vehicle capacity must be a positive integer'),
    body('vehicle.type').isIn(['car', 'auto', 'motorcycle']).withMessage('Vehicle type must be either car, auto, or motorcycle'),
], captainController.registerCaptain);

module.exports = router;