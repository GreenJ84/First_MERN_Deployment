const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
    pName: {
        type: String,
        required: [true, 'The Name is required for the Pet'],
        minlength: [3, 'The Name must be longer than 2 characters!']
    },
    pType: {
        type: String,
        required: [true, 'The Type is required for the Pet'],
        minlength: [3, 'The Type must be longer than 2 characters!']
    },
    pDescription:{
        type: String,
        required: [true, 'The Description is required for the Pet'],
        minlength: [10, 'The Desctiption must be longer than 9 characters!']
    },
    pSkills: {
        ps1: {
        type: String
        },
        ps2: {
            type: String
        },
        ps3: {
            type: String
        }
    }
    }, { timestamps: true});

module.exports.Pet = mongoose.model('Pet', PetSchema);