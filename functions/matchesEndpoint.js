const admin = require('firebase-admin');
const db = admin.firestore();
const matchesCollection = db.collection("matches");

exports.createMatch = function (req, res) {
    matchesCollection.add(req.body)

    //TODO: Add 'match-id' to users attributes 'matches'
    //TODO: Implement query parameters
        .then(result => {
            console.log('Succesfully inserted user');
            return res.status(201).send("Match funktioniert");

        })
        .catch((error) => {
            console.log('Error creating new user', error);
            return res.send(false);

        });
};

exports.getMatch = function (req, res) {
    //TODO: Implement function
}

