Template.modal.events({
    'submit form':function(e){
        e.preventDefault();
       // console.log(e)
           if(e.target.id == "createRoomForm"){
        var room = {
            timeStamp:new Date(Date())/1,
            createdBy:Meteor.user().username,
            roomJoinID:Math.floor(Math.random()*90000) + 10000,
            roomUID:Number(String(Random.fraction()).substring(2))  ,
            roomName:  $(e.target).find('[name=roomname]').val(),
            contentURL:  $(e.target).find('[name=contentURL]').val()
        }
               if( room.roomName.replace(/\s/g, "") == "" | room.roomName.replace(/\s/g, "").length < "5" ){
                   document.getElementById("alertBox").className="alert text-center";
                   document.getElementById("alertBox").innerHTML="<div>Please enter in a Name</div><div>That has more than 5 charachters</div>";
               } else {
                   Session.set('roomUID',room.roomUID,room.roomJoinID),
                       room._id = Rooms.insert(room);
                   document.getElementById('createRoomForm').reset();
                   $('#createModal').modal('toggle')
                   Meteor.Router.to('/Room/'+ room.roomJoinID);
               }
           }   else if(e.target.id == "joinRoomForm"){
        thisRoomJoinID = $(e.target).find('[name=joinID]').val();
        if(Rooms.find({roomJoinID:Number(thisRoomJoinID)}).count() == '1') {
            document.getElementById('joinRoomForm').reset();
            $('#joinModal').modal('toggle')
            Meteor.Router.to('/Room/'+ thisRoomJoinID);
        } else {
            document.getElementById("alertBox").className="alert";
            document.getElementById("alertBox").innerHTML="Incorrect ID";
        }
           }
    }

})