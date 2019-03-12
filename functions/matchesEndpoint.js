const admin = require('firebase-admin');
const db = admin.firestore();
const matchesCollection = db.collection("matches");

exports.createMatch = function (req, res) {
    matchesCollection.add(req.body)

    //TODO: Add 'match-id' to users attributes 'matches'
    //TODO: Implement query parameters
        .then(result => {
            res.status(201).send("Match funktioniert");
            console.log('Succesfully inserted user');
        })
        .catch((error) => {
            res.send(false);
            console.log('Error creating new user', error);
        });
};

exports.getMatch = function (req, res) {
    //TODO: Implement function
}

