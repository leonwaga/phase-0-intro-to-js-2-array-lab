let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
  cats.push("Ralph");
  return cats;
}
function destructivelyPrependCat(Bob) {
  cats.unshift("Bob");
  return cats;
}
function destructivelyRemoveLastCat(Bob) {
  cats.pop();
  return cats;
}
function destructivelyRemoveFirstCat(Bob) {
  cats.shift();
  return cats;
}
function appendCat(Broom) {
  return cats.concat(Broom);
}
function prependCat(Arnold) {
  return [Arnold].concat(cats);
}
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}
 function removeFirstCat() {
  return cats.slice(1);
}

 