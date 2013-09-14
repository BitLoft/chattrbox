if(Rooms.find().count() === 0){
    Rooms.insert({
        createdOn:Date(),
        createdBy:'admin@localhost',
        roomUID:Random.fraction(),
        roomJoinID:Math.floor(Math.random()*90000) + 10000
    }),
    Rooms.insert({
            createdOn:Date(),
            createdBy:'admin@localhost',
            roomUID:Random.fraction(),
            roomJoinID:Math.floor(Math.random()*90000) + 10000
    })
}
if(Meteor.users.find({username:'admin'}).count() === 0){
    Accounts.createUser({
        username:'admin',
        password:'pass',
        email:'admin@localhost'
    });
}