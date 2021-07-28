const { UserInputError } = require('apollo-server-express');
const { getDb } = require('./db');
const { ObjectId } = require('mongodb');

async function getUsers(_, { }) {
	const db = getDb();
	const users = await db.collection('users').find().toArray();
	return users;
}

async function getHabits(_, { _id }) {
	const db = getDb();
	const id = ObjectId(_id);
	const user = await db.collection('users').findOne(id);
	const habits = user.habitList;
	return habits;
}

module.exports = {
	getUsers, getHabits,
};