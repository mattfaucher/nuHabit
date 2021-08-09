const { UserInputError } = require("apollo-server-express");
const { getDb } = require("./db");
const { ObjectID } = require("mongodb").ObjectID;

async function findUser(_, email) {
  const db = getDb();
  const user = await db.collection("users").findOne(email);
  return user;
}

async function getUsers(_, { }) {
  const db = getDb();
  const users = await db.collection("users").find().toArray();
  return users;
}

async function getHabits(_, email) {
  const db = getDb();
  const user = await db.collection("users").findOne(email);
  const habits = user.habitList;
  return habits;
}

async function getCompletedHabits(_, email) {
  const db = getDb();
  const user = await db.collection("users").findOne(email);
  const completedHabits = user.completedHabits;
  return completedHabits;
}
async function insertUser(_, args) {
  const db = getDb();
  const userExists = await db.collection("users").findOne(args.user);
  // check for duplicate, throw error if needed
  if (userExists) throw new Error("User with this email already exists");
  const newUser = {
    name: args.user.name,
    email: args.user.email,
    habitList: [],
  };
  await db.collection("users").insertOne(newUser);
  // find it make sure it exists
  const savedUser = await db.collection("users").findOne(args.user);
  return savedUser;
}

const f = false;
async function insertHabit(_, args, { returnOriginal: f }) {
  const db = getDb();
  const newHabit = {
    _id: new ObjectID(),
    title: args.habit.title,
    increments: args.habit.increments,
    isGood: args.habit.isGood,
    count: 0,
    created: new Date(),
    isDone: false,
  };

  // update the user's habitlist
  await db.collection("users").updateOne(
    // filter by email
    { email: args.email },
    { $push: { habitList: newHabit } }
  );

  const email = { email: args.email };
  const user = await db.collection("users").findOne(email);
  return user.habitList;
}

async function updateHabit(_, args) {
  const db = getDb();
  const { title, isGood, increments, count } = args.habit;

  // Update the data for the habit
  await db.collection('users').updateOne(
    { email: args.email, 'habitList._id': ObjectID(args._id) },
    {
      $set: {
        'habitList.$.title': title,
        'habitList.$.isGood': isGood,
        'habitList.$.increments': increments,
        'habitList.$.count': count
      }
    }
  );
  
  // Validate and return the habit
  const email = { email: args.email };
  const user = await db.collection('users').findOne(email);
  return user.habitList.find(habit => habit._id === args._id);
}

module.exports = {
  findUser,
  getUsers,
  getHabits,
  insertUser,
  insertHabit,
  getCompletedHabits,
  updateHabit,
};
