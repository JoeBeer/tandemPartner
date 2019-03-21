const admin = require('firebase-admin');
const db = admin.firestore();
const chatroomsCollection = db.collection("chatrooms");

// Validation of the request to create a new chatroom.
// Then create a new chatroom document in the database with the Firebase Admin SDK.
exports.createChatroom = async (req, res) => {
    try {
        const chatroom = req.body;

        if (req.body.userA === req.body.userB) {
            console.log("Error - Can't create Chatroom with two identical userID's!")
            return res.send(false);
        }

        var alreadyExistingA;
        var alreadyExistingB;

        var resultA = await chatroomsCollection.where("userA", "==", req.body.userA)
            .where("userB", "==", req.body.userB).limit(1).get();
        alreadyExistingA = !resultA.empty;

        var resultB = await chatroomsCollection.where("userA", "==", req.body.userB)
            .where("userB", "==", req.body.userA).limit(1).get();
        alreadyExistingB = !resultB.empty;

        if (!alreadyExistingA && !alreadyExistingB) {
            const chatRef = await chatroomsCollection.add({
                userA: chatroom.userA,
                userB: chatroom.userB,
                createdAt: chatroom.updated,
                messages: chatroom.messages
            });
            console.log('Successfully added chatroom');
            return res.status(201).send({ result: true, chatroomId: chatRef.id });
        }
        else {
            const err = 'Error creating new chatroom - Chatroom aready exists';
            console.log(err)
            return res.send(false);
        }
    }
    catch (error) {
        console.log('Error creating new chatroom', error)
        return res.send(false);
    }
}

// Validation of the request to write a new message in the message field of the chatroom document.
// Then updating the chatroom document.
exports.updateChatroom = function (req, res) {
    const message = req.body
    // console.log(req.body)
    return chatroomsCollection.doc(req.params.chatroomid)
        .update({
            updated: Date.now(),
            messages: admin.firestore.FieldValue.arrayUnion({
                uid: message.uid,
                content: message.content,
                createdAt: message.createdAt
            })
        })
        .then(() => {
            console.log('Successfully added message');
            return res.status(200).send(true);
        })
        .catch((error) => {
            console.log('Error creating new chatroom', error)
            return res.send(false);
        })
}

//TODO add delete()