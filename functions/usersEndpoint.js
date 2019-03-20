const admin = require('firebase-admin');
const db = admin.firestore();
const userCollection = db.collection("users");
const matchesCollection = db.collection("matches");

// const admin = require('firebase-admin');
// const firebase = require('firebase');
// const db = admin.firestore();
// const userCollection = db.collection("users");
// var config = {
//     apiKey: "AIzaSyA60SCLQd6f7KOT_UmUml5RgMnAC3F5E_A",
//     authDomain: "livechattandem.firebaseapp.com"
// };
// firebase.initializeApp(config);

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
            res.send(false);
            console.log('Error getting users', error);
        });
};

exports.getUserById = function (req, res) {
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

exports.createUser = async (req, res) => {

    try {
        const user = req.body;
        console.log(user.password);
        const userRecord = await admin.auth().createUser({
            email: user.mail,
            emailVerified: false,
            password: user.password,
            displayName: user.firstname + ' ' + user.lastname,
            photoURL: "http://www.example.com/12345678/photo.png",
            disabled: false
        }).then(async (userRecord) => {
            console.log(userRecord.password);
            console.log(userRecord);
            return  await userCollection.doc(userRecord.uid).set({
                uid: userRecord.uid,
                firstname: user.firstname,
                lastname: user.lastname,
                photoURL: userRecord.photoURL,
                dateOfBirth: user.dateOfBirth,
                sex: user.sex,
                city: user.city,
                activities: user.activities,
                offers: user.offers
            })
          })

          console.log("Successfully created new user:");

          return res.status(200).send(userRecord); 
          
    }
    catch (error) {
        console.log("Error creating new user:", error);
            return res.send(false);
    }


    // const user = req.body;
    // firebase.auth().createUser(req.body.mail, req.body.password)
    //     .then(authRes => {
    //         userCollection.doc(authRes.user.uid).set(user)
    //             .then(function () {

    //                 console.log('Succesfully inserted user');
    //                 return res.status(201).send({ uid: authRes.user.uid });
    //             })
    //             .catch((error) => {
    //                 console.log('Error creating new user', error);
    //                 return res.send(false);
    //             });
    //     })
};

// exports.createUser = function(req,res){
//     userCollection.add(req.body)
//         .then(result => {
//             res.status(201).send(true);
//             console.log('Succesfully inserted user');
//         })
//         .catch((error) => {
//             res.send(false);
//             console.log('Error creating new user', error);
//         });
// };

exports.updateUser = function (req, res) {
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