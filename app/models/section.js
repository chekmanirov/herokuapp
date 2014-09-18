var mongoose = require('mongoose');

var sectionSchema = mongoose.Schema({
		background: String,
		header: String,
		leftCol: String,
		rightCol: String,
		centerCol: String
        });

module.exports = mongoose.model('Section', sectionSchema);