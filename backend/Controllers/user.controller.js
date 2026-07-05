const UserModel = require("../models/user.model");
const userService = require("../services/user.services");
const { validationResult } = require("express-validator");

module.exports.registerUser = {
    register: async (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        console.log("Request body:", req.body); // Log the request body for debugging

        const { fullName, email, password } = req.body;

        const hashedPassword = await UserModel.hashPassword(password);

        const user = await userService.createUser({
            fullName,
            email,
            password: hashedPassword,
        });
        const token = await user.generateAuthToken(user);

        res.status(201).json({ user, token });
    }
};

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

