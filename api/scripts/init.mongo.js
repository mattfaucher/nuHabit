/* global db print */
/* eslint no-restricted-globals: "off" */
db.habits.remove({});


const habitsDB = {};

db.habits.insertMany(habitsDB);
const count = db.habits.count();
// eslint-disable-next-line no-restricted-globals
print('Inserted', count, 'issues');

db.counters.remove({ _id: 'habits' });
db.deleted_habits.remove({});
db.counters.insert({ _id: 'habits', current: count });

db.habits.createIndex({ id: 1 }, { unique: true });
db.habits.createIndex({ status: 1 });
db.habits.createIndex({ owner: 1 });
db.habits.createIndex({ created: 1 });
db.habits.createIndex({ title: 'text', description: 'text' });

db.deleted_habits.createIndex({ id: 1 }, { unique: true });
