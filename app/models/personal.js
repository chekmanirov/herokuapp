var mongoose = require('mongoose');

var personalSchema = mongoose.Schema({
        firstName    : String,
        middleName   : String,
        lastName     : String,
        address      : String,
        city         : String,
        stateProvince: String,
        zipPostal    : String,
        country      : String,
        phone        : String,
        fax          : String,
        email        : String,
        linkedin     : {
        	url      : String,
        	name     : String
        },
        github       : {
        	url      : String,
        	name     : String
        },
        institution  : {
        	name     : String,
        	occupation : String,
        	program  : String,
        	timeline : String,
        	specialization : String
        },
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
        });


module.exports = mongoose.model('Personal', personalSchema);