const mongoose = require('mongoose');

const captain = captainSchema = new mongoose.Schema({

    fullName: {
        firstName: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long'],},
        lastName: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],},
    },

    Email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],

    },

password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
    },

    soketId: {
        type: String,
    },

    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },

    vehicle: {
        color: {
            type: String,
            required: true,},
        plateNumber: {
            type: String,
            required: true,},
        capacity: {
            type: Number,
            required: true,},
        
        type: {
            type: String,
            enum: ['car', 'auto', 'motorcycle'],
            required: true,
        },
    },
    
    location: {
        type: {
            type: String,
            enum: ['Point'],},
        coordinates: {
            type: [Number]}
    },

});


captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const CaptainModel = mongoose.model('Captain', captainSchema);
module.exports = CaptainModel;