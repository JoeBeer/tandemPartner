const admin = require('firebase-admin');
const db = admin.firestore();
const usersCollection = db.collection('users');
const matchesCollection = db.collection('matches');
const chatroomsCollection = db.collection('chatrooms');

// Creates new user in Firebase Authentication and Firebase Firestore with the given information inside the request.
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
            return await usersCollection.doc(userRecord.uid).set({
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
        console.error("Error creating new user:", error);
        return res.send(false);
    }
};

// Updates an existing user in Firebase Authentication and Firebase Firestore with the given information inside the request. 
exports.updateUser = function (req, res) {
    let userAuthUpdate;
    const updatedUser = req.body;

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

    admin.auth().updateUser(req.params.userId, userAuthUpdate)
        .then((userRecord) => {
            return usersCollection.doc(userRecord.uid).update({
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
            console.error("Error updating user:", error);
            return res.send(false);
        });
};

// Deletes an user in Firebase Authentication and Firebase Firestore. Also deletes every match, searches and chatrooms including the users ID.
exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const searchesCollection = usersCollection.doc(userId).collection('searches');
        var matchesId = [];
        var chatroomsId = [];
        var searchesId = [];

        // find all matches of the user and delete them
        var matchesAsPartner = await matchesCollection.where('partnerID', '==', userId).get();
        var matchesAsInitiator = await matchesCollection.where('initiatorID', '==', userId).get();

        matchesAsPartner.forEach(doc => {
            matchesId.push(doc.id);
        });
        matchesAsInitiator.forEach(doc => {
            matchesId.push(doc.id);
        });

        await Promise.all(matchesId.map(async (matchId) => {
            await matchesCollection.doc(matchId).delete()
        }));

        // find all chatrooms of the user and delete them
        var chatroomsAsUserA = await chatroomsCollection.where('userA', '==', userId).get();
        var chatroomsAsUserB = await chatroomsCollection.where('userB', '==', userId).get();

        chatroomsAsUserA.forEach(doc => {
            chatroomsId.push(doc.id);
        });
        chatroomsAsUserB.forEach(doc => {
            chatroomsId.push(doc.id);
        });

        await Promise.all(chatroomsId.map(async (chatroomId) => {
            await chatroomsCollection.doc(chatroomId).delete()
        }));

        // delete searches collection in user doc
        var searches = await searchesCollection.get();

        searches.forEach(search => {
            searchesId.push(search.id);
        });

        await Promise.all(searchesId.map(async (searchId) => {
            await searchesCollection.doc(searchId).delete()
        }));

        // delete user doc in users collection
        await usersCollection.doc(userId).delete();

        // delete user in Firebase Authentication
        await admin.auth().deleteUser(userId);

        console.log('Successfully deleted user');
        return res.status(200).send(true);
    }
    catch (error) {
        console.error('Error deleting user', error);
        return res.send(false);
    }
};