const admin = require('firebase-admin');

const db = admin.firestore();
const userCollection = db.collection("users");



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
            console.log('Succesfully got all users');
            return res.status(200).send(users);

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
                return res.status(200).send(user.data());
            }
        })
        .catch(error => {
            console.log('Error getting user', error);
            return res.send(false);

        });
};

/*exports.createUser = function (req, res) {
        const user = req.body;
    firebase.auth().createUserWithEmailAndPassword(user.mail, user.password)
        .then(authRes => {
            return userCollection.doc(authRes.user.uid).set(user)
                .then(function () {

                    console.log("AuthRes: "+authRes);
                    console.log('Succesfully inserted user');
                    return res.status(201).send(authRes);
                })
                .catch((error) => {
                    console.log('Error creating new user', error);
                    return res.send(false);
                });
        }).catch((error) => {
        console.log('Error creating new user', error);
        return res.send(false);
    })
};*/


exports.updateUser = function (req, res) {
    userCollection.doc(req.params.userId).set(req.body)
        .then(() => {
            console.log('Succesfully updated user');
            return res.status(204).send(true);

        })
        .catch((error) => {
            console.log('Error updating user', error);
            return res.send(false);

        });
};

exports.deleteUser = function (req, res) {
    userCollection.doc(req.params.userId).delete()
        .then(() => {
            console.log('Succesfully deleted user');
            return res.status(204).send(true);

        })
        .catch((error) => {
            console.log('Error deleted user', error);
            return res.send(false);

        });
};

exports.getMatches = function (req, res) {
    //TODO: Adding implementation
};