function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}


console.log("------1 užduotis:------");

let pirmas = 2
let antras = 4
let trecias = 8
let ketvirtas = 48
let penktas = 3
let sestas = 6

console.log(`1): ${trecias * antras + pirmas}`)
console.log(`2): ${trecias * (antras + pirmas)}`)
console.log(`3): ${ketvirtas / antras}`)
console.log(`4): ${penktas + sestas * pirmas}`)

console.log("------2 užduotis:------");

let vienas = 5
let du = 7

let trys = vienas + du

console.log(vienas, du, trys)

console.log("------3 užduotis:------");
let one = 8
let two = 4
let three = 2

console.log(`suma: ${one} + ${two} + ${three} = ${one + two + three}`)
console.log(`skirtumas: ${one} - ${two} - ${three} = ${one - two - three}`)
console.log(`sandauga: ${one} * ${two} * ${three} = ${one * two * three}`)
console.log(`dalmuo: ${one} / ${two} / ${three} = ${one / two / three}`)

console.log("------4 užduotis:------");

let x = 3
let y = 4

console.log(x, y);
x **= 5
y *= 2

console.log(x, y);


console.log("------5 užduotis:------");

let vardas = 'Darius'
let pavarde = 'J'
let gimimo = 1981
let data = 2023

console.log(`Aš esu: ${vardas} ${pavarde}. Man yra ${data - gimimo} metai(ų).`)

console.log("------6 užduotis:------");

pirmasSkaicius = random(0, 4);
antrasSkaicius = random(0, 4);

console.log(pirmasSkaicius, antrasSkaicius);

if (pirmasSkaicius > antrasSkaicius) {
    if (antrasSkaicius == 0) {console.log (`dalyba iš nulio negalima`);}
   else console.log(pirmasSkaicius / antrasSkaicius)
}
else if (antrasSkaicius >= pirmasSkaicius) {
    if (pirmasSkaicius == 0) {console.log (`dalyba iš nulio negalima`);}
else
    console.log(antrasSkaicius / pirmasSkaicius);
}

console.log("------7 užduotis:------");

pirmaSkaicius = random(0, 25);
antraSkaicius = random(0, 25);
treciaSkaicius = random(0, 25);
console.log(pirmaSkaicius, antraSkaicius, treciaSkaicius);

if (pirmaSkaicius >= antraSkaicius) {
    if (pirmaSkaicius >= treciaSkaicius) {
        if (antraSkaicius >= treciaSkaicius) {
            console.log(antraSkaicius)
        }
        else { console.log(treciaSkaicius) }
    } else { console.log(pirmaSkaicius) }
} else if (pirmaSkaicius >= treciaSkaicius) {
    console.log(pirmaSkaicius)}
else if (antraSkaicius >= treciaSkaicius) {
    console.log(treciaSkaicius)
}
else { console.log(antraSkaicius) }

    