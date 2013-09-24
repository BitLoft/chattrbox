Template.submitMessage.events({
    'submit form':function(e){
        e.preventDefault();
        var message = {
            timeStamp: new Date(Date())/1,
            sender:Meteor.user().username,
            sender:Meteor.user().profile.name,

            message:$(e.target).find('[name=message]').val(),
            roomUID:Session.get('roomUID')
        }

        message._id = Messages.insert(message);
        $(e.target).find('[name=message]').val('')
    }
})