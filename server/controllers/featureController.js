var mongoose = require('mongoose');


module.exports = function(app){
	
	// Top level features
	app.get('/all-features', function(req, res, next){
		// get from DB
		console.log('Getting all features from Db...');

		var featureSchema = mongoose.Schema({
			name: String,
			description: String,
			rating: String,
			userStoryCount: String,
			license: String
		});

		var featureModel = featureSchema

		var Feature = mongoose.model('Feature');

		// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
		Feature.find({}, function(err, docs){
			console.log(docs);
		});

		next();
	});


	// Requirement steps level
/*
	app.get('/feature/:fid/requirement-step/:rid', urlencodedParser, function(req, res){
		// get from DB
	});
	
	app.get('/feature/:fid/requirement-step/', function(req, res){
		// update or create DB
	});

	app.post('/feature/:fid/requirement-step/:rid', function(req, res){
		// delete from DB
	});


	// Individual feature level

	app.get('/feature/:fid', urlencodedParser, function(req, res){
		// get from DB

	});
	
	app.post('/feature/', function(req, res){
		// update or create in DB
	});
	
	app.post('/feature/:fid', function(req, res){
		// delete from DB
	});
	*/
}
