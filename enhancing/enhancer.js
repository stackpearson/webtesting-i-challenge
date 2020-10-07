module.exports = {
  success,
  fail,
  repair,
  get,
};


// item = {
//   "name": "item",
//   "enhancement": "int 0-20",
//   "durability": "int 0 - 100"
// }

// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).


function success(item) {

  if (item.enhancement <= 19) {
    item.enhancement = (item.enhancement + 1)
  } else {
    console.log('enhancement already maxxed out')
  }

  return { ...item };
}

function fail(item) {

  if (item.enhancement < 15) {
    item.durability = (item.durability - 5)
  } else item.durability = (item.durability -10);

  if (item.enhancement > 16) {
    item.enhancement = (item.enhancement -1)
  } else {
    console.log('item enhancement is not greater than 16, not decreasing it by 1')
  }

  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}
