// Key = array index of badgeArray, value = count comparison
export const badges = {
	day: {
		0: 1,
		1: 7,
		2: 15,
		3: 20,
		4: 30,
		5: 35,
		6: 45,
		7: 50,
		8: 60,
	},
	week: {
		0: 1,
		1: 2,
		2: 3,
		3: 4,
		4: 5,
		5: 6,
		6: 7,
		7: 9,
		8: 12,
	}
};

const path = '../badges/';
const jpg = '.jpg';

// add all the badge img urls into array, 0->8 indexed (9) badges
const badgeArray = [
	'bronze', 'silver', 'gold',
	'check1', 'check2', 'check3',
	'one', 'two', 'three'
];

// map each badge to create the file path
badgeArray.map(file => path + file + jpg);

export default { badgeArray, badges };