Meteor.subscribe('rooms');
Meteor.subscribe('messages');
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

