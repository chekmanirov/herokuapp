var mongoose = require('mongoose');

var contentSchema = mongoose.Schema({
		_owner      : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		desc        : String,
		type        : String,
		value       : String,
		path        : String,
		cssProperty : String,
		font        : String,
		fontsize    : String
        });


module.exports = mongoose.model('Content', contentSchema);