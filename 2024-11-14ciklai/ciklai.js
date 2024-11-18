console.log('---------------1 UZDUOTIS------------------');

let i = 0; //Norint naudoti tą patį kintamajį reikia atstatyi jo originalią reikšmę
while (i < 10) {
    console.log('labas');
    i++;
}

console.log('---------------2 UZDUOTIS------------------');

i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

console.log('---------------3 UZDUOTIS------------------');

i = 10;
while (i <= 50) {
    console.log(i);
    i += 2;
}

console.log('---------------4 UZDUOTIS------------------');

i = 10;
while (i <= 50) {
    if ((i % 10) !== 0) { console.log(i); }
    i += 2;
}

console.log('---------------5 UZDUOTIS------------------');

i = 0;
let count = 0;
while (i <= 20) {
    if ((i % 2) === 0) { count++ }
    i++;
}
console.log(count);

console.log('---------------6 UZDUOTIS------------------');

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

i = 0;
count = 0;
var array = [];
while (i < 300) {
    let skaicius = random(0, 300)
    if (skaicius > 150) { count++ }
    if (skaicius > 275) {
        array.push(`[${skaicius}]`);
    }
    else { array.push(skaicius); }
    i++;
}
console.log(array.join(' '));
console.log(`didesni nei 150:count ${count}`);

console.log('---------------7 UZDUOTIS------------------');

i = 1;
var array = [];
while (i <= 3000) {
    if (i % 77 === 0) {
        array.push(i);
    }
    i++;
}
console.log(array.join(', '));

console.log('---------------8 UZDUOTIS------------------');

i = 0;
let y = 0;
let rezultatas = ""
while (i < 25) {
    while (y < 25) {
        rezultatas += '* '
         y++;
    }
    i++;
    y = 0
    document.write(rezultatas)
    document.write ('<br>')
     rezultatas = ""
}

console.log('---------------9 UZDUOTIS------------------');
// Ankstesniame kvadrate nupieškite įstrižaines žaigždutę pakeisdami kitu simboliu.


i = 0;
y = 0;
rezultatas = ""
while (i < 25) {
    while (y < 25) {
        if (y === i || y === (24 - i)) { rezultatas += '& '; }
        else { rezultatas += '* '; }
        y++;
    }
    i++;
    y = 0
    console.log(rezultatas)
     rezultatas = ""
}




console.log('---------------10 UZDUOTIS------------------');

// Metam monetą. Monetos kritimo rezultatą imituojam random() funkcija, 
// kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
// Iškritus herbui;
// Tris kartus iškritus herbui;
// Tris kartus iš eilės iškritus herbui;


console.log('--- a---');

let moneta = 1;

while (moneta === 1) {
    moneta = random(0, 1);
    if (moneta === 0) { console.log('H'); } else { console.log(`S`); }
}

console.log('--- b---');

moneta = 1;
count = 0;
while (count <= 2) {
    moneta = random(0, 1);
    if (moneta === 0) { count++ }
    if (moneta === 0) { console.log('H'); } else { console.log(`S`); }
}

console.log('--- c---');

moneta = 1;
count = 0;
while (count <= 2) {
    moneta = random(0, 1);
    if (moneta === 1) { count = 0 } else { count++ }
    if (moneta === 0) { console.log('H'); } else { console.log(`S`); }
}


console.log('---------------11 UZDUOTIS------------------');
// Kazys ir Petras žaidžia šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25. Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija random(). Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.

let petras = 0
let kazys = 0

while (petras < 222 && kazys < 222) {
    petrotaskai = random(10, 20)
    kaziotaskai = random(5, 25)

    if (petrotaskai > kaziotaskai) {
        console.log(`Petras: ${petrotaskai} taškai, Kazys: ${kaziotaskai} taškai. Partiją laimėjo: Petras`);
    }
    else if (petrotaskai = kaziotaskai) {
        console.log(`Petras: ${petrotaskai} taškai, Kazys: ${kaziotaskai} taškai. Lygiosios`);
    }
    else { console.log(`Petras: ${petrotaskai} taškai, Kazys: ${kaziotaskai} taškai. Partiją laimėjo: Kazys`); }
    petras = petras + petrotaskai;
    kazys = kazys + kaziotaskai;
}

if (petras > kazys) {
    console.log(`Petras: ${petras} taškai, Kazys: ${kazys} taškai. Žaidimą laimėjo: Petras`);
}
else if (petrotaskai = kaziotaskai) {
    console.log(`Petras: ${petras} taškai, Kazys: ${kazys} taškai. Lygiosios`);
}
else { console.log(`Petras: ${petras} taškai, Kazys: ${kazys} taškai. Žaidimą laimėjo: Kazys`); }


console.log('---------------12 UZDUOTIS------------------');
// Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami random() funkcija. Vinies ilgis 8.5cm (pilnai sulenda į lentą).
// “Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį įkala 5-20 mm. Suskaičiuokite kiek reikia smūgių.
// “Įkalkite” 5 vinis dideliais smūgiais. Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė jog bus nepataikyta į vinį. (pasinaudokite random() funkcija).

console.log('--- a---');

let vinis = 0;
count = 1;
i = 0
while (count <= 5) {
    while (vinis <= 85) {
        kalimas = random(5, 20);
        vinis = vinis + kalimas;
        i++;
    }
    count++;
}
console.log(`5 vynys įkaltos ${i} smūgiais`)

console.log('--- b---');

vinis = 0;
count = 1;
let tikimybe;
i = 0
while (count <= 5) {
    while (vinis <= 85) {
        kalimas = random(20, 30);
        tikimybe = random(0, 1);
        if (tikimybe === 1) {
            vinis = vinis + kalimas;
        }

        i++;
        console.log(tikimybe, vinis);
    }
    count++;
    vinis = 0;
    console.log(count);
}
console.log(`5 vynys įkaltos ${i} smūgiais`)












