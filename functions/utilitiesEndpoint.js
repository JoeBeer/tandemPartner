// TODO delete after utilities added to the db
const admin = require('firebase-admin');
const db = admin.firestore();
const utilitiesCollection = db.collection("utilities");

exports.createUtilitiesDoc = (req, res) => {
    utilitiesCollection.doc('utilitiesDoc2').set(
        req.body
    )
    .then(() => {
        return res.send(true);
    })
    .catch((error) => {
        console.log(error);
        return res.send(false)
    })
}