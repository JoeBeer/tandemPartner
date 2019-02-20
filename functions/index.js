'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const cors = require('cors')({ origin: true });

const express = require('express');
const app = express();

app.use(cors);

var db = admin.firestore();
var userCollection = db.collection("users");

//get all users
app.get('/users', (req, res) => {
   var users = [];
    userCollection.get()
   .then((snapshot) => {
	// get for each user the data
     snapshot.docs.forEach(user => {
		 // add each user to the users[]
         users.push(user.data());
     })
	// send the users[] via the respond
     res.status(200).send(users);
     console.log('Succesfully got all users');
   })
   .catch((error) => {
    res.send(false);
     console.log('Error getting users', error);
   });
});

// Get one user
app.get('/users/:userId', (req, res) => {
    userCollection.doc(req.params.userId).get()
    .then(user => {
      if (!user.exists) {
        console.log('No such user!');
          res.send('No such user!');
      } else {
        res.status(200).send(user.data());
      }
    })
    .catch(error => {
      res.send(false);
      console.log('Error getting user', error);
    });
});

// Create new user
app.post('/users', (req, res) => {
    userCollection.add(req.body)
    .then(result => {
      res.status(201).send(true);
      console.log('Succesfully inserted user');
    })
    .catch((error) => {
      res.send(false);
      console.log('Error creating new user', error);
    });
});

// Update user
app.patch('/users/:userId', (req, res) => {
    userCollection.doc(req.params.userId).set(req.params.data)
    .then(result => {
      console.log('Succesfully updated user');
    })
    .catch((error) => {
      res.send(false);
      console.log('Error updating user', error);
    });
});

// Delete a user 
app.delete('/users/:userId', (req, res) => {
    userCollection.doc(req.params.id).delete()
    .then(result => {
      res.status(204).send(true);
      console.log('Succesfully deleted user');
    })
    .catch((error) => {
      res.send(false);
      console.log('Error deleted user', error);
    });
});

exports.app = functions.https.onRequest(app);