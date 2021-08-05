/* global db print */
/* eslint no-restricted-globals: "off" */
db.users.remove({});

const users = [
  {
    name: "Matt",
    email: "mfauch4444@gmail.com",
    habitList: [],
    deletedHabits: [],
    completedHabits: [],
  },
  {
    name: "Ciara",
    email: "cwil290831@gmail.com",
    habitList: [],
  },
];

db.users.insertMany(users);
const count = db.users.count();
// eslint-disable-next-line no-restricted-globals
print("Inserted", count, "users");

db.deleted_habits.remove({});

db.users.createIndex({ id: 1 }, { unique: true });
db.users.createIndex({ status: 1 });
db.users.createIndex({ created: 1 });
db.users.createIndex({ title: "text", description: "text" });
