const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db');

async function userList(_, {}) {
  const db = getDb();
	const users = await db.collection('users').find();
	return users;
}

module.exports = {
	userList,
};