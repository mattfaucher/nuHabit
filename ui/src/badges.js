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
  },
};

const path = "../badges/";
const jpg = ".jpg";

// add all the badge img urls into array, 0->8 indexed (9) badges

export const badgeArr = [
  "https://i.imgur.com/wpREyW2.jpeg", //green check
  "https://i.imgur.com/DX0wWfC.jpeg", //blue check
  "https://i.imgur.com/GvzeID9.jpeg", //gold check
  "https://i.imgur.com/sqplbYQ.jpeg", //medal 3
  "https://i.imgur.com/hR4PABw.jpeg", //medal 2
  "https://i.imgur.com/KoWMVCl.jpeg", //medal 1
  "https://i.imgur.com/CrA0bwA.jpeg", //3 star trophy
  "https://i.imgur.com/BojYiox.jpeg", //2 star trophy
  "https://i.imgur.com/DTOm7lr.jpeg", //1 star trophy
];

// map each badge to create the file path
export const badgeArray = badgeArr.map((file, index) => {
  const collections = {
    key: index,
    badge: file,
  };
  return collections;
});

export default { badgeArray, badges, badgeArr };
