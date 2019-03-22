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
    
}
// exports.createMatch = function (req, res) {
//     matchesCollection.add(req.body)

//     //TODO: Add 'match-id' to users attributes 'matches'
//     //TODO: Implement query parameters
//         .then(result => {
//             console.log('Succesfully inserted user');
//             return res.status(201).send("Match funktioniert");
//         })
//         .catch((error) => {
//             console.log('Error creating new user', error);
//             return res.send(false);
//         });
// };

