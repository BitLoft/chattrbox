
Meteor.Router.add({
    '/':'comingSoon',
    '/createRoom':'createRoom',
   '/CreatePreso':'setMedia',
   '/SetConvo':'setConvo',
   '/myrooms':'myRooms',
   '/video':'video',
   '/join':'joinRoom',
   '/testingCreation':'testingCreation',
    '/admin':'admin',
    '/csv':"csv",
    '/Room/:roomJoinID':{
        to:'room',
        and:function(id){
            console.log(id);
            Session.set('roomJoinID',Number(id));
           Session.set('roomUID',Object(Rooms.findOne({roomJoinID:Session.get('roomJoinID')})).roomUID);
        }

    },
    '/RoomList':'roomList',
    '404':"404",
     '*':"404"


});
