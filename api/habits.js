const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db');

async function get(_, { id }) {
    const db = getDb();
    const issue = await db.collection('habits').findOne({ id });
    return issue;
  }

  async function list(_, { title}) {
    
  }