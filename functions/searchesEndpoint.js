const admin = require('firebase-admin');
const db = admin.firestore();
const searchesCollection = db.collection("searches");

exports.createSearch = function (req, res) {
    let search = req.body;

    //searchesCollection.doc.add(search)
    return res.status(201).send(search);
}