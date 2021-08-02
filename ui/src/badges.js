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

const bronzeImage = require("nuHabbit/badges/bronze.jpg")
const silverImage = require("nuHabbit/badges/silver.jpg")
const goldImage = require("nuHabbit/badges/gold.jpg")
const check1 = require("nuHabbit/badges/check1.jpg")
const check2 = require("nuHabbit/badges/check2.jpg")
const check3 = require("nuHabbit/badges/check3.jpg")
const one = require("nuHabbit/badges/one.jpg")
const two = require("nuHabbit/badges/two.jpg")
const three = require("nuHabbit/badges/three.jpg")


// add all the badge img urls into array, 0->8 indexed (9) badges
const badgeArray = ["bronzeImage", "silverImage", "goldImage", "check1", "check2", "check3", "one", "two", "three"];

export default { badgeArray, badges };