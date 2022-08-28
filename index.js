const cats = ['Milo', 'Otis', 'Garfield'];


function destructivelyAppendCat(name="Brooke"){
    return cats.push(name);
}

function destructivelyPrependCat(name="Georgie"){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}

function appendCat(name="Beth"){
    const newCats = [...cats, name];
    return newCats;
}

function prependCat(name="Sandy"){
    const newCats = [name, ...cats];
    return newCats;
}

function removeLastCat(){
    return cats.slice(0, -1);
}

function removeFirstCat(){
    return cats.slice(1, 3);
}