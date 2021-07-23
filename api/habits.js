const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db');

async function get(_, { id }) {
  const db = getDb();
  const habit = await db.collection('habits').findOne({ id });
  return habit;
}

async function list(_, { title, isGood, increments }) {
  const db = getDb();
  const filter = {};

  if (title) filter.title = title;
  if (isGood) filter.isGood = isGood;
  if (increments) filter.increments = increments;
  const cursor = db.collection('issues').find(filter);
  const habit = cursor.toArray();


  return { habit };
}

function validate(habit) {
  const errors = [];
  if (habit.title.length < 3) {
    errors.push('Field "title" must be at least 3 characters long.');
  }

  if (errors.length > 0) {
    throw new UserInputError('Invalid input(s)', { errors });
  }
}

async function add(_, { habit }) {
  const db = getDb();
  validate(habit);
  const newHabit = Object.assign({}, habit);
  newHabit.created = new Date();
  newHabit.id = await getNextSequence('habits');
  const result = await db.collection('habits').insertOne(newHabit);
  const savedIssue = await db.collection('habits').findOne({ _id: result.insertedId });
  return savedIssue;
}

async function update(_, { id, changes }) {
  const db = getDb();
  if (changes.title || changes.increments || changes.isGood) {
    const habit = await db.collection('habits').findOne({ id });
    Object.assign(habit, changes);
    validate(habit);
  }
  await db.collection('habits').updateOne({ id }, { $set: changes });
  const savedHabit = await db.collection('habits').findOne({ id });
  return savedHabit;
}

async function remove(_, { id }) {
  const db = getDb();
  const habit = await db.collection('habits').findOne({ id });
  if (!habit) return false;
  habit.deleted = new Date();

  // I have a question! On the code below

  let result = await db.collection('deleted_issues').insertOne({ id });
  if (result.insertedId) {
    result = await db.collection('habits').removeOne({ id });
    return result.deletedCount === 1;
  }
  return false;
}

async function restore(_, { id }) {
  const db = getDb();
  const habit = await db.collection('deleted_habits').findOne({ id });
  if (!habit) return false;
  habit.deleted = new Date();

  let result = await db.collection('habits').insertOne(habit);
  if (result.insertedId) {
    result = await db.collection('deleted_habits').removeOne({ id });
    return result.deletedCount === 1;
  }
  return false;
}

module.exports = {
  list, add, get, update, delete: remove, restore,
};
