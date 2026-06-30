const UserModel = require("../models/user.model");

module.exports = {
    register: async (req, res, next) => {
        try {
            const { fullName, email, password } = req.body;
            const user = new UserModel({ fullName, email, password });
            await user.save();
            res.status(201).json({ message: 'User registered successfully' })
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error' })
        }
    }
}

