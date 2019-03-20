const admin = require('firebase-admin');
const db = admin.firestore();
const chatroomsCollection = db.collection("chatrooms");

exports.createChatroom = async (req, res) => {
    try {
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
            const chatRef = await chatroomsCollection.add(req.body);
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

exports.updateChatroom = function (req, res) {
    console.log(req.body)
    return chatroomsCollection.doc(req.params.chatroomid)
        .update({
            messages: admin.firestore.FieldValue.arrayUnion(req.body)
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