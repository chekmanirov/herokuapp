var mongoose = require('mongoose');

var sectionSchema = mongoose.Schema({
		_owner      : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		background  : {type: mongoose.Schema.Types.ObjectId, ref: 'Content'},
		centerHeader: String,
		leftHeader  : String,
		rightHeader : String,
		leftCol     : [{type: mongoose.Schema.Types.ObjectId, ref: 'Content'}],
		rightCol    : [{type: mongoose.Schema.Types.ObjectId, ref: 'Content'}],
		centerCol   : [{type: mongoose.Schema.Types.ObjectId, ref: 'Content'}]
        });


module.exports = mongoose.model('Section', sectionSchema);