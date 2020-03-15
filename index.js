let team_members = [
  'jonliak',
  'brentvatne',
  'cruzach',
  'esamelson',
  'EvanBacon',
  'FiberJW',
  'fson',
  'ide',
  'IjzerenHein',
  'jkhales',
  'jonsamp',
  'nicknovitski',
  // 'nikki93',
  'quinlanj',
  'wschurman',
  'tcdavis',
  'ccheever',
];

function pair_up() {
  let people = [...team_members];
  let pairs = [];
  let extra_person = null;

  let pop_random_person = () => {
    let j = Math.floor(Math.random() * people.length);
    let p = people[j];
    people = people.filter((val, idx, arr) => idx !== j);
    return p;
  };

  while (people.length > 1) {
    let p1 = pop_random_person();
    let p2 = pop_random_person();
    pairs.push([p1, p2]);
  }

  if (people.length > 0) {
    pairs.push([people.pop(), '*BYE*']);
  }

  return pairs;
}

module.exports = {
  team_members,
  pair_up,
};
