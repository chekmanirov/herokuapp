var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
	_owner           : { type: Number, ref: 'User' }
    profile          : {
        id           : String,
        url          : String
    },
    personal         : [{type: Schema.Types.ObjectId, ref: 'Personal'}],
    sections         : [{type: Schema.Types.ObjectId, ref: 'Section'}],
    headerImage      : { data: Buffer, contentType: String },
    loginBackground  : String

});

module.exports = mongoose.model('Profile', profileSchema);