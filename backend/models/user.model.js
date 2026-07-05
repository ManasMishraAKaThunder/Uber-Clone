const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minlength: [3, 'first name must be atleast be 3 characters long']
        },
        lastName: {
            type: String,
            required: true,
            minlength: [3, 'last name must be atleast be 3 characters long']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [10, 'email must be atleast 10 characters long'],
        maxlength: [100, 'email must be atleast 100 characters long']
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String,
        required: false
    }
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;