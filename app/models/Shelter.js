const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const config = require('../config');

const shelterSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        match: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength:[5,'Minimun length 5 characters']
    },
    address: String,
    phone: String,
    city: String,
    country: String,
    image: String,
    lat: Number,
    long: Number
});

shelterSchema.pre('save', function (next) {
    if (this.password) {
        this.password = bcrypt.hashSync(this.password, config.server.bcrypt.rounds);
    }
    next();
});

shelterSchema.method({
    checkPassword: function (plaintextPassword) {
        return bcrypt.compareSync(plaintextPassword, this.password);
    },
});

const Shelter = mongoose.model('Shelter', shelterSchema);

module.exports = Shelter;