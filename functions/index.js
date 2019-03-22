'use strict';
const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firebase);


const cors = require('cors')({ origin: true });
const express = require('express');

const users = express();
users.use(cors);
let usersEndpoint = require('./usersEndpoint');

const matches = express();
matches.use(cors);
let matchesEndpoint = require('./matchesEndpoint');

const chatrooms = express();
chatrooms.use(cors);
let chatroomsEndpoint = require('./chatroomsEndpoint')


const searches = express();
searches.use(cors);
let searchesEnpoint = require('./searchesEndpoint');

// users.get('/', usersEndpoint.getUsers); //Get all users
// users.get('/:userId', usersEndpoint.getUserById);// Get one user
users.post('/', usersEndpoint.createUser); // Create new user
users.put('/:userId', usersEndpoint.updateUser); // Update user
users.delete('/:userId', usersEndpoint.deleteUser); // Delete a user
exports.users = functions.https.onRequest(users); //Enables function 'users' @ Cloud Functions

matches.post('/', matchesEndpoint.createMatch); //Create new match
// matches.get('/:matchId', matchesEndpoint.getMatch); //Get one match
exports.matches = functions.https.onRequest(matches); //Enables function 'matches' @ Cloud Functions

chatrooms.post('/', chatroomsEndpoint.createChatroom); // Create new chatroom
chatrooms.put('/:chatroomid', chatroomsEndpoint.updateChatroom) // Update chatroom
exports.chatrooms = functions.https.onRequest(chatrooms); //Enables function 'chatrooms' @ Cloud Functions

searches.post('/', searchesEnpoint.createSearch);
exports.searches = functions.https.onRequest(searches); //Enables function 'searches' @ Cloud Functions