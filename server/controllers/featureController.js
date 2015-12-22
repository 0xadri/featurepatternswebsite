var mongoose = require('mongoose');


module.exports = function(app){

	var Feature = mongoose.model('Feature');
	
	app.get('/api', function(req, res) {
	    res.json({ message: 'hooray! welcome to our api!' });   
	});

	/*
		Features API overview

		/api/features	GET	Get all the features.
		/api/features	POST	Create a feature.
		/api/features/:feature_id	GET	Get a single feature.
		/api/features/:feature_id	PUT	Update a feature with new info.
		/api/features/:feature_id	DELETE	Delete a feature.
	*/

	// Get all the features
	app.get('/api/feature', function(req, res, next){

		Feature.find({}, function(err, features){
			if (err)
                res.send(err);

            res.json(features);
		});

	});

	// Get a single feature
	app.get('/api/feature/:feature_id', function(req, res){

		Feature.findById(req.params.feature_id, function(err, feature) {
            if (err)
                res.send(err);
            res.json(feature);
        });

	});

/*	
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
