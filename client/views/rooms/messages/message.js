Template.message.helpers({
    messages:function(){
        return Messages.find({roomUID:Session.get(roomUniqueID)}, { sort: {timeStamp: -1} });
    }
});