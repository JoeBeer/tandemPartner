const admin = require('firebase-admin');
const db = admin.firestore();
const userCollection = db.collection("users");

exports.createUser = async (req, res) => {
    try {
        const user = req.body;
        const userRecord = await admin.auth().createUser({
            email: user.mail,
            password: user.password,
            displayName: user.firstname + ' ' + user.lastname,
            photoURL: "http://www.example.com/12345678/photo.png",
            disabled: false
        }).then(async (userRecord) => {
            return await userCollection.doc(userRecord.uid).set({
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
};

exports.updateUser = function (req, res) {
    // try {

    // }
    // catch (error) {

    // }


    let userAuthUpdate;
    const updatedUser = req.body;
    console.table(updatedUser);

    if (updatedUser.mail) {
        userAuthUpdate = {
            email: updatedUser.mail,
            password: updatedUser.password,
            displayName: updatedUser.firstname + ' ' + updatedUser.lastname,
        }
    } else {
        userAuthUpdate = {
            displayName: updatedUser.firstname + ' ' + updatedUser.lastname,
        }
    }

    console.table(userAuthUpdate);

    // return res.status(200).send(true);

    admin.auth().updateUser(req.params.userId, userAuthUpdate)
        .then((userRecord) => {
            // console.log(userRecord.password);
            // console.log(userRecord);
            console.log(req.params.userId)
            console.log(userRecord.uid)
            return userCollection.doc(userRecord.uid).update({
                firstname: updatedUser.firstname,
                lastname: updatedUser.lastname,
                sex: updatedUser.sex,
                city: updatedUser.city,
                activities: updatedUser.activities,
                offers: updatedUser.offers
            })
        }).then(() => {
            console.log("Successfully updated user:");
            return res.status(200).send(true);
        })
        .catch((error) => {
            console.log("Error updating user:", error);
            return res.send(false);
        });
};

// exports.updateUser = function (req, res) {
//     userCollection.doc(req.params.userId).set(req.body)
//         .then(result => {
//             res.status(201).send(true);
//             console.log('Succesfully updated user');
//         })
//         .catch((error) => {
//             res.send(false);
//             console.log('Error updating user', error);
//         });
// };

// TODO delete all further connections - matches, chatrooms, firebase.auth, users
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