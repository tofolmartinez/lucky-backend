const mongoose = require('mongoose');
const config = require('../config');
const User = require('./User');


const petSchema = mongoose.Schema({
    name: {
        type: String,
    },
    city: {
        type: String,
    },
    species: {
        type: mongoose.SchemaTypes.ObjectId,
        // ref: Species,
    },
    birthDate: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'n/a']
    },
    size: {
        type: String,
        enum: ['small', 'medium', 'big']
    },
    image: {
        type: String
    },

    data: {
        weight: {
            type: String,

        },
        personality: {
            type: String
        },
        history: {
            type: String
        }
    },

    health: {
        vaccine: Boolean,
        dewormed: Boolean,
        healthful: Boolean,
        sterilized: Boolean,
        identified: Boolean,
        chip: Boolean,
        about: String
    },

    adoption: {
        requeriments: String,
        rates: String,
        transfers: String
    },

    user: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: User // protectora
    }]

})


const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;