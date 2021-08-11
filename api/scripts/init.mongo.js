/* global db print */
/* eslint no-restricted-globals: "off" */
db.users.remove({});
db.deleted_habits.remove({});

db.users.createIndex({ id: 1 }, { unique: true });
db.users.createIndex({ status: 1 });
db.users.createIndex({ created: 1 });
db.users.createIndex({ title: "text", description: "text" });
