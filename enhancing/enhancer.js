module.exports = {
  success,
  fail,
  repair,
  get,
};



function success(item) {

    item.durability = 100;


  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
