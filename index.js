const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    return [...cats, name];
  }
function prependCat(name) {
    return [name, ...cats];
}
function removeLastCat() {
    const slicedCats = cats.slice(0, -1);
    return slicedCats;
  }
  function removeFirstCat() {
    return cats.slice(1);
  }
 