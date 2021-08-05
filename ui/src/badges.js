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

const path = '../badges/';
const jpg = '.jpg';

// add all the badge img urls into array, 0->8 indexed (9) badges

export const badgeArr = [
  'https://i.imgur.com/wpREyW2.jpeg', // green check
  'https://i.imgur.com/DX0wWfC.jpeg', // blue check
  'https://i.imgur.com/GvzeID9.jpeg', // gold check
  'https://i.imgur.com/sqplbYQ.jpeg', // medal 3
  'https://i.imgur.com/hR4PABw.jpeg', // medal 2
  'https://i.imgur.com/KoWMVCl.jpeg', // medal 1
  'https://i.imgur.com/CrA0bwA.jpeg', // 3 star trophy
  'https://i.imgur.com/BojYiox.jpeg', // 2 star trophy
  'https://i.imgur.com/DTOm7lr.jpeg', // 1 star trophy
];

export const encouragement = {
  daily: {
    0: 'Day 1 In The Bag!',
    1: 'A week? No Sweat',
    2: 'A quarter of the way there!',
    3: 'You GOT This!',
    4: 'HALF WAY!!',
    5: 'Over the HUMP!',
    6: 'Three quarters! Keep it UP!',
    7: 'Only 10 More Days!',
    8: 'CONGRATS!! You Have a New Habit!',
  },

  weekly: {
    0: 'Week 1 In The Bag!',
    1: 'You GOT This!',
    2: 'One Third Down!',
    3: 'Four weeks? No Sweat',
    4: 'Keep it UP!',
    5: 'HALF WAY!!',
    6: 'Over the HUMP!',
    7: 'Two Thirds in the Bag!',
    8: 'CONGRATS!! You Have a New Habit!',
  },
};

export default { badges, badgeArr, encouragement };
