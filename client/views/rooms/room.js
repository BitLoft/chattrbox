Template.room.helpers({
    messages:function(){
        return Messages.find({roomUID:Session.get('roomUID')}, { sort: {timeStamp: -1} });
        //return Messages.find({}, { sort: {timeStamp: -1} });
    },
    Rooms:function(){
        return Rooms.find({});
    }
});

