// app/routes.js
module.exports = function(app, passport) {

	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', function(req, res) {
		res.render('index.ejs', { message: req.flash('loginMessage') }); // load the index.ejs file
	});
	
	// =====================================
	// LEGAL ===============================
	// =====================================
	app.get('/legal', function(req, res) {
		res.render('legal.ejs'); // load the legal.ejs file
	});
	
	// =====================================
	// ABOUT ===============================
	// =====================================
	app.get('/about', function(req, res) {
		res.render('about.ejs'); // load the about.ejs file
	});
	
	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	app.get('/login', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('login.ejs', { message: req.flash('loginMessage') }); 
	});

	// process the login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));
	
	
	//
	
	/*var personalSchema = mongoose.Schema({
    name         : String,
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
    }
    });*/    
	
	app.post('/personal/add', isLoggedIn, function(req, res) {
			var userid = req.user._id;
	console.log('user: ' + userid);
	    // asynchronous
	    process.nextTick(function() {
	    	var User = require('../app/models/user.js');
	    	User.findOne({ '_id': userid }, function(err, user) {
	    		console.log(user);
		        if (err)
		            return done(err);
		        var Personal       	= require('../app/models/personal.js');
		        var newPersonal = new Personal({
			        firstName  : 'Kevin',
			        lastName   : 'Me',
			        address    : '386 Yonge St. #1019',
			        city         : 'Toronto',
			        stateProvince: 'Ontario',
			        zipPostal    : 'M5B0A5',
			        country      : 'Canada',
			        phone        : '+1 (647)992-1733',
			        fax          : '',
			        email        : 'kevin.me@mail.utoronto.ca',
			        linkedin : {url : 'https://https://www.linkedin.com/in/kevinme',
			        name: 'Kevin Me'},
			        github : { url : 'https://www.github.com/chekmanirov', 
			        	name: 'chekmanirov'},
			        institution  : {
			        	name     : 'University of Toronto',
			        	occupation : 'Student',
			        	program  : 'BaSc Mechanical Engineering, Dean\'s List',
			        	timeline : '2010-2015 (1T4+PEY)',
			        	specialization : 'Mechatronics and Bioengineering'
			        },
			        user   : user._id
		        });
		        
	            newPersonal.save(function(err) {
	                if (err)
	                    throw err;
	                return "";
	            });
	    	});
	    
	    	
	    /*	
		// find a user whose email is the same as the forms email
		// we are checking to see if the user trying to login already exists
	    User.findOne({ 'user': user }, function(err, user) {
	        // if there are any errors, return the error
	        if (err)
	            return done(err);

	        // check to see if there is already a user with that username
	        if (user && email) {
	            return done(null, false, req.flash('signupMessage', 'Contact information associated with that email address already exists.'));
	        } else {

				// if there is no user with that email
	            // create the user
	            var newPersonal            = new Personal();

	            // set the user's local credentials
	            newPersonal.user    = user;
	            newPersonal.name = "";

				// save the user
	            newPersonal.save(function(err) {
	                if (err)
	                    throw err;
	                return done(null, newPersonal);
	            });
	        }

	    });    
*/
	    });
	});

	// =====================================
	// PROFILE ==============================
	// =====================================
	// show the profile page
	
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});
	
	// =====================================
	// DASHBOARD ==============================
	// =====================================
	
	app.get('/dashboard', isLoggedIn, function(req, res) {
		res.render('dashboard.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});
	
	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form
	app.get('/signup', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// PROFILE SECTION =====================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/users', isLoggedIn, function(req, res) {
		res.render('users.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on 
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}