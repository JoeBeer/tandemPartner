const admin = require('firebase-admin');
const db = admin.firestore();
const matchesCollection = db.collection("matches");

exports.createMatch = function (req, res) {
    const match = req.body;
    
    matchesCollection.add({
        initiatorID: match.initiatorID,
        partnerID: match.partnerID,
        matchedOffer: match.matchedOffer,
        accepted: match.accepted
    }).then(() => {
            console.log('Succesfully inserted user');
            return res.status(201).send("Success - match created");
        })
        .catch((error) => {
            console.log('Error creating new match', error);
            return res.send(false);
        });
};

exports.deleteMatch = (req, res) => {
    matchesCollection.doc(req.params.matchId).delete()
        .then(() => {
            console.log('Success - match deleted')
            return res.status(200).send(true)
        })
        .catch ((error) => {
            console.log('Error - deleting match failed')
            return res.status(500).send(false)
        })
}

