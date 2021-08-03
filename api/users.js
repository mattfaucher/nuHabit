const { UserInputError } = require('apollo-server-express');
const { getDb } = require('./db');
const { ObjectId } = require('mongodb');

async function getUsers(_, { }) {
	const db = getDb();
	const users = await db.collection('users').find().toArray();
	return users;
}

async function getHabits(_, email) {
	const db = getDb();
	const user = await db.collection('users').findOne(email);
	const habits = user.habitList;
	return habits;
}

// todo
// async function addHabit(_, { user }) {}

module.exports = {
	getUsers, getHabits, //addHabit,
};