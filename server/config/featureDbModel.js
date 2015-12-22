
var mongoose     = require('mongoose');

var featureSchema = mongoose.Schema({
    name: String,
    description: String,
    rating: String,
    userStoryCount: String,
    license: String,
    requirementSteps : [
			{
				name: String,
				userStories : [
					String,
					String,
					String,
					String,
					String
				]
			},
			{
				name: String,
				userStories : [
					String,
					String
				]
			}
		]
});
module.exports = mongoose.model('Feature', featureSchema);
