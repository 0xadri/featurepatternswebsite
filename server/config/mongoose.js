var mongoose = require('mongoose');

module.exports = function(config){

    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback(){
        console.log('Db opened');
    });

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
    var Feature = mongoose.model('Feature', featureSchema);

    Feature.find({}).exec(function(err, collection){
        if(collection.length === 0){
            Feature.create({
								name: 'contact-form-basics',
								description: 'Basic formular to send email',
								rating: '****',
								userStoryCount: '20',
								license: 'Public domain',
								requirementSteps : [
									{
										name: 'landing view',
										userStories : [
											'As a user I must enter my email address',
											'As a user I must enter a topic',
											'As a user I must enter a content',
											'As a user I must pass a test to verify I am not a robot',
											'As a user I can submit by form via a simple click'
										]
									},
									{
										name: 'success confirmation view',
										userStories : [
											'As a user I must see a success message when my message has successfully been sent',
											'As a user I want to have a copy of this message to be sent to my email address too'
										]
									}
								]
							})
            Feature.create({
								name: 'contact-us-basics',
								description: 'Basic "contact us" page',
								rating: '***',
								userStoryCount: '15',
								license: 'CC-BY',
								requirementSteps : [
									{
										name: 'screen view',
										userStories : [
											'As a user I want to see your address',
											'As a user I want to see your location on an embedded Google Map, or at least a link to the location on Google map',
											'As a user I want to see your email address, or at least a link to a contact form',
											'As a user I want to see your phone number, or at least a link to a contact form',
											'As a user I want to see links to your social media profiles: twitter, fb page, instagram, & more'
										]
									}
								]
							})
            Feature.create({
								name: 'forgotten-password-basics',
								description: 'Basic forgotten password process',
								rating: '*****',
								userStoryCount: '26',
								license: 'MIT',
								requirementSteps : [
									{
										name: 'landing view',
										userStories : [
											'As a user I can request to reset my password by a simple click'
										]
									},
									{
										name: 'reset-pw-email-sent',
										userStories : [
											'As a user I want to see a message telling me an email to reset my password was sent to me',
											'As a user I want to understand the link in the email will let me reset my password'
										]
									},
									{
										name: 'reset-pw-view',
										userStories : [
											'As a user I must type a password',
											'As a user I must type a confirmation password',
											'As a user I can click on a button to go to the next step'
										]
									},
									{
										name: 'reset-pw-conf-view',
										userStories : [
											'As a user I want to see a clear message confirming my password is now changed'
										]
									}
								]
							})
        }
    })
}
