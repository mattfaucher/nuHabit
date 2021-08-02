// Key = array index of badgeArray, value = count comparison
const badges = {
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

// add all the badge img urls into array, 0->8 indexed (9) badges
const badgeArray = ["img1", "badge2"];

export default { badgeArray, badges };