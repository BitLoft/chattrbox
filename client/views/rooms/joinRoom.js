Template.joinRoom.events({
    'submit form':function(e){
        e.preventDefault();

        thisRoomJoinID = $(e.target).find('[name=joinID]').val();
        //console.log(thisRoomJoinID);
        //console.log(Rooms.find({roomJoinID:Number(thisRoomJoinID)}).fetch());
        //console.log($(e.target).find('[name=joinID]'));


        if(Rooms.find({roomJoinID:Number(thisRoomJoinID)}).count() == '1') {
        Meteor.Router.to('/Room/'+ thisRoomJoinID);
            } else {
            document.getElementById("alertBox").className="alert";
            document.getElementById("alertBox").innerHTML="Incorrect ID";
        }
    }
});
