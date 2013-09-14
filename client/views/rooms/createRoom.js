Template.createRoom.events({
    'submit form':function(e){
        e.preventDefault();
        var room = {
            timeStamp:new Date(Date())/1,
            createdBy:Meteor.user().username,
            roomJoinID:Math.floor(Math.random()*90000) + 10000,
            roomUID:Number(String(Random.fraction()).substring(2))  ,
            roomName:  $(e.target).find('[name=roomname]').val()
        }
        if( room.roomName.replace(/\s/g, "") == "" | room.roomName.replace(/\s/g, "").length < "5" ){
            document.getElementById("alertBox").className="alert text-center";
            document.getElementById("alertBox").innerHTML="<div>Please enter in a Name</div><div>That has more than 5 charachters</div>";
        } else {
        Session.set('roomUID',room.roomUID,room.roomJoinID),
        room._id = Rooms.insert(room);
        Meteor.Router.to('/Room/'+ room.roomJoinID);
        }
    }
});
Template.createRoom.currentRoom=function(){
        return Session.get('roomUID') || false;
};

Template.createRoom.currentRoom=function(){
    return Session.get('roomUID') || false;
};
