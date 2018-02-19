let mongoose = require('mongoose');

let AuthorSchema = new mongoose.Schema({
    name: {required: true, type: String}
}, {timestamps: true});

module.exports = mongoose.model('Author', AuthorSchema);

