angular.module('feature-patterns', []);

angular.module('feature-patterns').controller('TableController', tableFunc);

function tableFunc(){
	this.message = 'Hi there';

	this.featureList = [
		{
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
		},
		{
			name: 'contact-us-basics',
			description: 'Basic "contact us" page',
			rating: '***',
			userStoryCount: '15',
			license: 'CC-BY'
		},
		{
			name: 'forgotten-password-basics',
			description: 'Basic forgotten password process',
			rating: '*****',
			userStoryCount: '26',
			license: 'MIT'
		}
	];
}