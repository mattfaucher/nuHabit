const { UserInputError } = require("apollo-server-express");
const { getDb } = require("./db");
const { ObjectID } = require("mongodb").ObjectID;

const { badges } = require('./badges');

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
    earnedBadges: [0, 0, 0, 0, 0, 0, 0, 0, 0]
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
    index: 0,
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
  await db.collection("users").updateOne(
    { email: args.email, "habitList._id": ObjectID(args._id) },
    {
      $set: {
        "habitList.$.title": title,
        "habitList.$.isGood": isGood,
        "habitList.$.increments": increments,
        "habitList.$.count": count,
      },
    }
  );

  // Validate and return the habit
  const email = { email: args.email };
  const user = await db.collection("users").findOne(email);
  // Filter and return the updated habit
  const updatedHabit = user.habitList.find((habit) => {
    if (habit._id == args._id) {
      return habit;
    }
  });
  return updatedHabit;
}

// Update the count when a user clicks Done
async function updateCount(_, args) {
  const db = getDb();
  const { count, increments } = args.habit;

  // Check for completed habit DAILY
  if (increments === 'Daily' && count === 60) {
    // Update the data for the habit
    await db.collection("users").updateOne(
      { email: args.email, "habitList._id": ObjectID(args._id) },
      { $set: { "habitList.$.count": count } }
    );

    //need to increment badges earned at index 8
    await db.collection('users').updateOne(
      {email: args.email },
      { $inc : { 'earnedBadge.8': 1 } }
    );

    // remove from habitList
    const deleteObject = await db
      .collection("users")
      .findOneAndUpdate(
        { email: args.email },
        { $pull: { habitList: { _id: ObjectID(args._id) } } },
        { returnOriginal: true }
      );
    // Get the deleted habit from deleteObject

    const completedHabit = deleteObject.value.habitList.find(habit => {
      if (habit._id == args._id) {
        return habit;
      }
    });
    // push on to completedHabits

    await db.collection('users').updateOne(
      { email: args.email },
      { $push: { completedHabits: completedHabit } }
    );
    return completedHabit;
  }
  // Check for completed habit WEEKLY
  if (increments === 'Weekly' && count === 12) {
    // Update the data for the habit
    await db.collection("users").updateOne(
      { email: args.email, "habitList._id": ObjectID(args._id) },
      { $set: { "habitList.$.count": count } }
    );

    // increment final earned badge 1x
    await db.collection('users').updateOne(
      {email: args.email },
      { $inc : { 'earnedBadge.8': 1 } }
    );

    // remove from habitList
    const deleteObject = await db
      .collection("users")
      .findOneAndUpdate(
        { email: args.email },
        { $pull: { habitList: { _id: ObjectID(args._id) } } },
        { returnOriginal: true }
      );
    // Get the deleted habit from deleteObject
    const completedHabit = deleteObject.value.habitList.find(habit => {

      if (habit._id == args._id) {
        return habit;
      }
    });
    // push on to completedHabits

    await db.collection('users').updateOne(
      { email: args.email },
      { $push: { completedHabits: completedHabit } }
    );
    return completedHabit;
  }

  // DEFAULT WHEN NOT COMPLETE HABIT
  // Update the data for the habit
  await db.collection('users').updateOne(
    { email: args.email, "habitList._id": ObjectID(args._id) },
    { $set: { "habitList.$.count": count } }
  );

  const user = await db.collection('users').findOne(
    { email: args.email }
  );

  // Filter and return the updated habit
  const updatedHabit = user.habitList.find(habit => {

    if (habit._id == args._id) {
      return habit;
    }
  });
  return updatedHabit;
}

// Delete a habit from habitList and append to deletedHabits
async function deleteHabit(_, args) {
  const db = getDb();
  // save deleted habit
  const deleteObject = await db
    .collection("users")
    .findOneAndUpdate(
      { email: args.email },
      { $pull: { habitList: { _id: ObjectID(args._id) } } },
      { returnOriginal: true }
    );

  // Get the deleted habit from deleteObject
  const deletedHabit = deleteObject.value.habitList.find((habit) => {
    if (habit._id == args._id) {
      return habit;
    }
  });

  // Push deleted habit on to deletedhabits list
  await db
    .collection("users")
    .updateOne(
      { email: args.email },
      { $push: { deletedHabits: deletedHabit } }
    );

  // return the habit object
  return deletedHabit;
}

async function getBadgesEarned(_, args) {
  const db = getDb();
  const user = await db.collection("users").findOne(args);
  return user;
}

async function updateBadgesEarned(_, args) {
  const db = getDb();
  const user = await db.collection('users').findOne(args);
  // if the user has no habits just return 
  if (user.habitList === []) return user;
  let habitList = user.habitList;
  let updatedEarnedBadges = user.earnedBadges;
  
  // determine the habit index and update accordingly
  habitList.forEach(async habit => {
    let index = 0;
    if (habit.increments === 'Daily') {
      // loop over daily badges
      // if current count is >= then increment index
      const days = Object.keys(badges.day);
      for (let i = 0; i < days.length; i++) {
        if (habit.count >= badges.day[i]) {
          index++;
        }
      }
      // update the index for next time around
      await db.collection('users').updateOne(
        { email: args.email, 'habitList._id': habit._id },
        { $set: { 'habitList.$.index': index } },
      );
    }
    if (habit.increments === 'Weekly') {
      // loop over daily badges
      // if current count is >= then increment index
      const weeks = Object.keys(badges.week);
      for (let i = 0; i < weeks.length; i++) {
        if (habit.count >= badges.week[i]) {
          index++;
        }
      }
      // update the index for next time around
      await db.collection('users').updateOne(
        { email: args.email, 'habitList._id': habit._id },
        { $set: { 'habitList.$.index': index } },
      );
    }
  });

  // loop over all the habits
  habitList.forEach(async habit => {
    if (habit.increments === "Daily") {
      const days = Object.keys(badges.day);
      // start looping from the index
      for (let j = habit.index; j < days.length; j++) {
        if (habit.count >= badges.day[j]) {
          updatedEarnedBadges[j]++;
        }
      }
    }
    if (habit.increments === "Weekly") {
      const weeks = Object.keys(badges.week);
      for (let j = habit.index; j < weeks.length; j++) {
        if (habit.count >= badges.week[j]) {
          updatedEarnedBadges[j]++;
        }
      }
    }
  });

  // set the new array to be the users badge array
  await db.collection("users").updateOne(
    { email: args.email },
    { $set: { earnedBadges: updatedEarnedBadges } }
  );

  return user;
}

module.exports = {
  findUser,
  getUsers,
  getHabits,
  insertUser,
  insertHabit,
  getCompletedHabits,
  updateHabit,
  deleteHabit,
  updateCount,
  updateBadgesEarned,
  getBadgesEarned,
};
