const admin = require('firebase-admin');
const db = admin.firestore();
const userCollection = db.collection("users");
const matchesCollection = db.collection("matches");

exports.getUsers = function(req, res){
   let users = [];
    userCollection.get()
   .then((snapshot) => {
	// get for each user the data
     snapshot.docs.forEach(user => {
		 // add each user to the users[]
         users.push(user.data());
     })
	// send the users[] via the respond
     res.status(200).send(users);
     console.log('Succesfully got all users');
   })
   .catch((error) => {
    res.send(false);
     console.log('Error getting users', error);
   });
};

exports.getUserById = function(req,res){
    userCollection.doc(req.params.userId).get()
        .then(user => {
            if (!user.exists) {
                console.log('No such user!');
                res.send('No such user!');
            } else {
                res.status(200).send(user.data());
            }
        })
        .catch(error => {
            res.send(false);
            console.log('Error getting user', error);
        });
};

exports.createUser = function(req,res){
    userCollection.add(req.body)
        .then(result => {
            res.status(201).send(true);
            console.log('Succesfully inserted user');
        })
        .catch((error) => {
            res.send(false);
            console.log('Error creating new user', error);
        });
};

exports.updateUser = function(req, res){
    userCollection.doc(req.params.userId).set(req.body)
        .then(result => {
            res.status(201).send(true);
            console.log('Succesfully updated user');
        })
        .catch((error) => {
            res.send(false);
            console.log('Error updating user', error);
        });
};

exports.deleteUser = function(req, res){
    userCollection.doc(req.params.userId).delete()
        .then(() => {
            res.status(204).send(true);
            console.log('Succesfully deleted user');
        })
        .catch((error) => {
            res.send(false);
            console.log('Error deleted user', error);
        });
};

exports.getMatches = function (req, res) {
    //TODO: Adding implementation
};