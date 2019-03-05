'use strict';
const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firebase);


const cors = require('cors')({ origin: true });
const express = require('express');

const users = express();
users.use(cors);
let usersEndpoint = require('./usersEndpoint')

const matches = express();
matches.use(cors);
let matchesEndpoint = require('./matchesEndpoint')

const chatrooms = express();
matches.use(cors);
let chatroomsEndpoint = require('./chatroomsEndpoint')



users.get('/', usersEndpoint.getUsers); //Get all users
users.get('/:user-id', usersEndpoint.getUserById);// Get one user
users.post('/', usersEndpoint.createUser); // Create new user
users.put('/:user-id', usersEndpoint.updateUser); // Update user
users.delete('/:user-id', usersEndpoint.deleteUser); // Delete a user
users.get('/:user-id/matches', usersEndpoint.getMatches); // Gets the matches from a user
exports.users = functions.https.onRequest(users); //Enables function 'users' @ Cloud Functions

matches.post('/', matchesEndpoint.createMatch); //Create new match
matches.get('/:match-id', matchesEndpoint.getMatch); //Get one match
exports.matches = functions.https.onRequest(matches); //Enables function 'matches' @ Cloud Functions

chatrooms.post('/', chatroomsEndpoint.createChatroom); // Create new chatroom
chatrooms.get('/:chatroom-id', chatroomsEndpoint.getChatroomById) // Get one chatroom
exports.chatrooms = functions.https.onRequest(chatrooms); //Enables function 'chatrooms' @ Cloud Functions
