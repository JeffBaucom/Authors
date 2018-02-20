let mongoose = require('mongoose');

let AuthorSchema = new mongoose.Schema({
    name: {required: true, type: String},
    quotes: [
        {
            text: String,
            votes: Number
        }
    ]
}, {timestamps: true});

module.exports = mongoose.model('Author', AuthorSchema);

