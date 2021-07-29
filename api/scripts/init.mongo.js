/* global db print */
/* eslint no-restricted-globals: "off" */
db.users.remove({});

const users = [
	{
		'signedIn': false,
		'name': 'Matt',
		'email': 'email@email.com',
		'habitList': [
			{
				'id': 1,
				'title': 'Workout',
				'increments': 'Daily',
				'created': new Date(),
				'isGood': true,
				'count': 5
			},
		]
	},
	{
		'signedIn': false,
		'name': 'Ciara',
		'email': 'email@email.com',
		'habitList': [
			{
				'id': 1,
				'title': 'Eat Healthy',
				'increments': 'Daily',
				'created': new Date(),
				'isGood': true,
				'count': 5
			},
		]
	}
];

db.users.insertMany(users);
const count = db.users.count();
// eslint-disable-next-line no-restricted-globals
print('Inserted', count, 'issues');

db.deleted_habits.remove({});

db.users.createIndex({ id: 1 }, { unique: true });
db.users.createIndex({ status: 1 });
db.users.createIndex({ created: 1 });
db.users.createIndex({ title: 'text', description: 'text' });

db.deleted_habits.createIndex({ id: 1 }, { unique: true });
