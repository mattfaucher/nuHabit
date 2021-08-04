const { UserInputError } = require('apollo-server-express');
const { getDb } = require('./db');

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

async function insertUser(_, args) {
	const db = getDb();
	const userExists = await db.collection('users').findOne(args.user);
	// check for duplicate, throw error if needed
	if (userExists) throw new Error('User with this email already exists');
	const newUser = {
		name: args.user.name,
		email: args.user.email,
		habitList: [],
	};
	await db.collection('users').insertOne(newUser);
	// find it make sure it exists
	const savedUser = await db.collection('users').findOne(args.user);
	return savedUser;
}

module.exports = {
	getUsers, getHabits, insertUser,
};