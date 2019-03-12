const admin = require('firebase-admin');
const firebase = require('firebase');
const db = admin.firestore();
const userCollection = db.collection("users");
var config = {
    apiKey: "AIzaSyBxiXuAZtfccGZDvZY0A-MbYnD45820tZE",
    authDomain: "tandemdurchstichtest.firebaseapp.com"
};
firebase.initializeApp(config);


exports.getUsers = function (req, res) {
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
            console.log('Error getting users', error);
            return res.send(false);

        });
};

exports.getUserById = function (req, res) {
    userCollection.doc(req.params.userId).get()
        .then(user => {
            if (!user.exists) {
                console.log('No such user!');
                return res.status(404).send('No such user!');
            } else {
                res.status(200).send(user.data());
            }
        })
        .catch(error => {
            console.log('Error getting user', error);
            return res.send(false);

        });
};

exports.createUser = function (req, res) {
        const user = req.body;
        console.log(user);
    firebase.auth().createUserWithEmailAndPassword(req.body.mail, req.body.password)
        .then(authRes => {
            console.log("Bin hier");
            userCollection.doc(authRes.user.uid).set(user)
                .then(function () {

                    console.log('Succesfully inserted user');
                    return res.status(201).send({uid: authRes.user.uid});
                })
                .catch((error) => {
                    res.send(false);
                    console.log('Error creating new user', error);
                });
        })
};


exports.updateUser = function (req, res) {
    userCollection.doc(req.params.userId).set(req.body)
        .then(result => {
            res.status(204).send(true);
            console.log('Succesfully updated user');
        })
        .catch((error) => {
            res.send(false);
            console.log('Error updating user', error);
        });
};

exports.deleteUser = function (req, res) {
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