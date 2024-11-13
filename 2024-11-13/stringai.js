function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log('-----1 UZDUOTIS------');

let vardas = 'Giedrius'
let pavarde = 'Savickas'

if (vardas.length < pavarde.length) 
{console.log(vardas);
} else if (vardas.length > pavarde.length) 
{console.log(pavarde);} else console.log(vardas, pavarde);

console.log('-----2 UZDUOTIS------');

console.log(vardas.toUpperCase(), pavarde.toLowerCase());

console.log('-----3 UZDUOTIS------');

console.log(vardas[0] + pavarde[0]);

console.log('-----4 UZDUOTIS------');

console.log(vardas[vardas.length - 3] + vardas[vardas.length - 2] + vardas[vardas.length - 1] + pavarde[pavarde.length - 3] + pavarde[pavarde.length - 2] + pavarde[pavarde.length - 1]);

console.log('-----5 UZDUOTIS------');

let stringas = 'An American in Paris'
stringas = stringas.replaceAll("A", "*")
stringas = stringas.replaceAll("a", "*")
console.log(stringas)

console.log('-----6 UZDUOTIS------');

stringas = 'An American in Paris'
console.log(stringas)
let skaicius = 0

skaicius = (stringas.match(/a/gi)||[]).length;

console.log(skaicius);


console.log('-----7 UZDUOTIS------');

stringas = 'An American in Paris'
stringas = stringas.replaceAll("A", "")
stringas = stringas.replaceAll("a", "")
stringas = stringas.replaceAll("E", "")
stringas = stringas.replaceAll("e", "")
stringas = stringas.replaceAll("I", "")
stringas = stringas.replaceAll("i", "")
stringas = stringas.replaceAll("O", "")
stringas = stringas.replaceAll("o", "")
stringas = stringas.replaceAll("U", "")
stringas = stringas.replaceAll("u", "")
console.log(stringas)

stringas = "Breakfast at Tiffany's"
stringas = stringas.replaceAll("A", "")
stringas = stringas.replaceAll("a", "")
stringas = stringas.replaceAll("E", "")
stringas = stringas.replaceAll("e", "")
stringas = stringas.replaceAll("I", "")
stringas = stringas.replaceAll("i", "")
stringas = stringas.replaceAll("O", "")
stringas = stringas.replaceAll("o", "")
stringas = stringas.replaceAll("U", "")
stringas = stringas.replaceAll("u", "")
console.log(stringas)

stringas = '2001: A Space Odyssey'
stringas = stringas.replaceAll("A", "")
stringas = stringas.replaceAll("a", "")
stringas = stringas.replaceAll("E", "")
stringas = stringas.replaceAll("e", "")
stringas = stringas.replaceAll("I", "")
stringas = stringas.replaceAll("i", "")
stringas = stringas.replaceAll("O", "")
stringas = stringas.replaceAll("o", "")
stringas = stringas.replaceAll("U", "")
stringas = stringas.replaceAll("u", "")
console.log(stringas)

stringas = "It's a Wonderful Life"
stringas = stringas.replaceAll("A", "")
stringas = stringas.replaceAll("a", "")
stringas = stringas.replaceAll("E", "")
stringas = stringas.replaceAll("e", "")
stringas = stringas.replaceAll("I", "")
stringas = stringas.replaceAll("i", "")
stringas = stringas.replaceAll("O", "")
stringas = stringas.replaceAll("o", "")
stringas = stringas.replaceAll("U", "")
stringas = stringas.replaceAll("u", "")
console.log(stringas)

console.log('-----8 UZDUOTIS------');
// Surasti ir atspausdinti epizodo numerį.
// Rezultato pvz: 5 9
// 'Star Wars: Episode '${random(0,5)} ${random(1,9)}' - A New Hope'

stringas = `Star Wars: Episode ${random(0,5)} ${random(1,9)} - A New Hope`

// Function to extract numbers
function myGeeks() {

    // Input string
    let str = stringas;
    console.log(str)

    // Using match with regEx
    let matches = str.match(/\d+/g);
    
    // Display output if number extracted
    if (matches) {
        console.log(matches[0] +' '+ matches[1]);
    }
}
// Function call
myGeeks();





console.log('-----9 UZDUOTIS------');
// Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. 
// Stringo ilgis 3 simboliai.
// Rezultato pvz: jkr

let atsitiktinis = ''
function Str_Random(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    // Loop to generate characters for the specified length
    for (let i = 0; i < length; i++) {
        const randomInd = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomInd);
    }
    return result;
}

atsitiktinis = Str_Random(3);
console.log(atsitiktinis);

console.log('-----10 UZDUOTIS------');

// Suskaičiuoti kiek stringe “Don't Be a Menace to South Central While Drinking Your Juice in the Hood”
//  yra žodžių trumpesnių arba lygių nei 5 raidės. 
// Pakartokite kodą su stringu “Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”.



stringas = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood"





stringas = 'Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale'







