var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
	_owner           : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    profile          : {
        name         : String,
        url          : String
    },
    personal         : [{type: mongoose.Schema.Types.ObjectId, ref: 'Personal'}],
    sections         : [{type: mongoose.Schema.Types.ObjectId, ref: 'Section'}],
    headerImage      : { data: Buffer, contentType: String },
    loginBackground  : String

});


module.exports = mongoose.model('Profile', profileSchema);