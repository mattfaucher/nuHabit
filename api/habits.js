const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db');

async function get(_, { id }) {
    const db = getDb();
    const habit = await db.collection('habits').findOne({ id });
    return habit;
  }

  async function list(_, { title}) {
      const db = getDb();
      const filter = {};

      if(title) filter.title = title;
    
      return { habit };
  }

  function validate(habit) {
    const errors = [];
    if(habit.title.length < 3) {
      errors.push('Field "title" must be at least 3 characters long.');
    }

    if (errors.length > 0) {
      throw new UserInputError('Invalid input(s)', { errors });
    }
  }

  async function add(_, { habit })

  module.exports = { list, get }