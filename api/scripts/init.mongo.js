/* global db print */
/* eslint no-restricted-globals: "off" */
db.users.remove({});

const users = [
	{
		'name': 'Matt',
		'email': 'mfauch4444@gmail.com',
		'habitList': [
			{
				'id': 1,
				'title': 'Workout',
				'increments': 'Daily',
				'created': new Date(),
				'isGood': true,
				'count': 5,
				'isDone': false
			},
			{
				'id': 2,
				'title': 'Study DSA',
				'increments': 'Daily',
				'created': new Date(),
				'isGood': true,
				'count': 10,
				'isDone': false
			},
		]
	},
	{
		'name': 'Ciara',
		'email': 'cwil290831@gmail.com',
		'habitList': [
			{
				'id': 1,
				'title': 'Eat Healthy',
				'increments': 'Daily',
				'created': new Date(),
				'isGood': true,
				'count': 20,
				'isDone': false
			},
		]
	}
];

db.users.insertMany(users);
const count = db.users.count();
// eslint-disable-next-line no-restricted-globals
print('Inserted', count, 'issues');

db.deleted_habits.remove({});