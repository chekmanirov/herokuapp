var mongoose = require('mongoose');

var personalSchema = mongoose.Schema({
        name         : String,
        address      : String,
        city         : String,
        stateProvince: String,
        zipPostal    : String,
        country      : String,
        phone        : String,
        fax          : String,
        email:       : String,
        linkedin     : {
        	url      : String,
        	name     : String
        },
        github       : {
        	url      : String,
        	name     : String
        },
        institution  : {
        	name:    : String,
        	occupation : String,
        	program  : String,
        	timeline : String,
        	specialization : String
        }
        });

module.exports = mongoose.model('Personal', personalSchema);