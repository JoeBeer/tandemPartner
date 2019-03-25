const admin = require('firebase-admin');
const db = admin.firestore();

exports.createSearch = async (req, res) => {
    try {
        const search = req.body;
        const uid = search.uid;
        const searchesCollection = db.collection('users').doc(uid)
            .collection('searches');
        let toDelete;

        var searches = await searchesCollection.get();

        const size = searches.size;
        if (size >= 5) {
            const sortedSearches = await searchesCollection.orderBy('createdAt', 'asc').limit(1).get()
            sortedSearches.forEach(doc => {
                toDelete = doc.id;
            })
            searchesCollection.doc(toDelete).delete()
        }
        const searchRef = await searchesCollection.add({
            cityParam: search.cityParam,
            createdAt: search.createdAt,
            maxAgeParam: search.maxAgeParam,
            minAgeParam: search.minAgeParam,
            offerParam: search.offerParam,
            sexParam: search.sexParam
        })
        return res.status(201).send({
            result: true,
            id: searchRef.id
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send(false);
    }
}

// exports.createSearch = function (req, res) {
//     const search = req.body;
//     let searches = db.collection('users').doc(req.body.uid)
//         .collection('searches');
//     searches.get()
//     .then(snapshot => {
//         const size = snapshot.size;
//         console.log("Groesse Suchen" + size);

//         if (size >= 5) {
//             let toDelete;
//             searches.orderBy('timestamp', 'asc').limit(1).get().then(
//                 snapshot => {
//                     snapshot.forEach(doc => {
//                         console.log("Snapshot orderBy: " + snapshot.size);
//                         toDelete = doc.id;
//                         console.log("ID loeschen: " + toDelete);
//                     })
//                     searches.doc(toDelete).delete()
//                     .then(() => {
//                             searches.add(search).then(() => {
//                                     return res.status(201).send(search);
//                                 }
//                             ).catch((error) => {
//                                 console.log(error);
//                                 return res.status(500).send(false);
//                             })
//                         }
//                     );
//                 }
//             )
//         }
//     })
// }