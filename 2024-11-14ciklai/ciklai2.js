function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


document.write('<br>')
document.write('---------------1 UZDUOTIS------------------');
document.write('<br>');
document.write('<br>');
rezultatas = ""
for (let index = 7; index <= 31; index++) {
    if ((index % 2) !== 0) { rezultatas += index + ' '; }

}
document.write(rezultatas)
document.write('<br>')

document.write('<br>')
document.write('---------------2 UZDUOTIS------------------');
document.write('<br>')


for (i = 1; i <= 10; i++) {
    for (y = 1; y <= 10; y++) {
        document.write(y)

        if (y === i)
            break
    }
    document.write('<br>')
}
console.log('---------------ciklai 2 - 3 UZDUOTIS------------------');


document.write('<br>')
document.write('---------------3 UZDUOTIS------------------');
document.write('<br>')

stringas = 'Žalgiris, Anadolu Efes, Barcelona BC, ketvirta'


let ilgis = stringas.length
komanda = ""
let kiekis = 0

for (i = 0; i < ilgis; i++) {
    if (stringas[i] === ',' || i === ilgis - 1) {
        kiekis++;
    }
}
let randomas = random(1, kiekis);
kiekis = 0;
for (i = 0; i < ilgis; i++) {
    if (stringas[i] !== ',') {
        komanda += stringas[i];
    }
    if (stringas[i] === ',' || i === ilgis - 1) {
        kiekis++;
        if (kiekis === randomas) {
            console.log(komanda.trim());
        }
        komanda = "";
    }
}

console.log('---------------ciklai 2 - 4 UZDUOTIS------------------');

document.write('<br>')
document.write('---------------4 UZDUOTIS------------------');
document.write('<br>')

stringas = '54 77 2 59 50 7 17 19 108 7 7'

ilgis = stringas.length
skaicius = ""
let skaic = 0
let pirminis = true;

for (i = 0; i < ilgis; i++) {
    if (stringas[i] !== ' ') {
        skaicius += stringas[i];
    }
    if (stringas[i] === ' ' || i === ilgis - 1) {
        pirminis = true;
        skaic = parseInt(skaicius);
        if (skaic === 1) {
            pirminis = false;
        }
        if (skaic === 2) {
            pirminis = true;
        }
        for (var x = 2; x < skaic; x++) {
            if (skaic % x === 0) {
                pirminis = false;
            }
        }
        if (pirminis === true) {
            console.log(skaic + ' pirminis')
        } else {
            console.log(skaic + ' nepirminis')
        }
        skaicius = "";
    }

}



console.log('---------------ciklai 2 - 5 UZDUOTIS------------------');

document.write('<br>')
document.write('---------------5 UZDUOTIS------------------');
document.write('<br>')

stringas = 'gjrgkjxvbsigdvifpjqyzlzxsxzjnvgojlziaofdfnufymsjqsxxyknqcchmpepoljekhydgmfvhwipvopllndyuddcgxnleutsmprxqlcnxxthdhtpnutqocvtuanouumbkmlxexzmc'
ilgis = stringas.length
skaicius = ""

for (i = 0; i < ilgis; i += 7) {
    if (i !== 0) {
        skaicius += stringas[i]
    }
}
console.log(skaicius)



console.log('---------------ciklai 2 - 6 UZDUOTIS------------------');

document.write('<br>')
document.write('---------------6 UZDUOTIS------------------');
document.write('<br>')

skaicius = "";
stringas = "";
y = 0;
kartotinis = false;


while (y < 10) {
    let skaicius1 = random(1, 15);
    console.log(skaicius1);
    ilgis = stringas.length;
    kartotinis = false;
    for (i = 0; i < ilgis; i++) {
        if (stringas[i] !== ' ') {
            skaicius += stringas[i];
        }
        else if (stringas[i] === ' ' || i === ilgis - 1) {
            if (skaicius1.toString() === skaicius) { kartotinis = true; }
            else {
                skaicius = "";
            }
        }
    }
    if (!kartotinis) {
        stringas = stringas + skaicius1 + ' ';
        y++;
    }
}
console.log(stringas);

console.log('---------------ciklai 2 - 7 UZDUOTIS------------------');
document.write('<br>')
document.write('---------------7 UZDUOTIS------------------');
document.write('<br>')


i = 0;
y = 0;
rezultatas = ""
let centras = 10
while (i < 11) {
    while (y < 21) {
        spalva1 = random(0, 255);
        spalva2 = random(0, 255);
        spalva3 = random(0, 255);
        if (y <= centras + i && y >= centras - i) {
            rezultatas += `<span style="color: rgb(${spalva1}, ${spalva2}, ${spalva3})">*</span>`;
        }
        else { rezultatas += ''; }
        y++;
    }
    i++;
    y = 0
    console.log(rezultatas);
    document.write(`<p>${rezultatas}</p>`);
    rezultatas = ""
}

i = 0;
y = 0;
rezultatas = ""
centras = 10
while (i < 10) {
    while (y < 21) {
        spalva1 = random(0, 255);
        spalva2 = random(0, 255);
        spalva3 = random(0, 255);
        if (y > i && y < (21 - i - 1)) {
            rezultatas += `<span style="color: rgb(${spalva1}, ${spalva2}, ${spalva3})">*</span>`;

        }
        else { rezultatas += ''; }
        y++;
    }
    i++;
    y = 0
    console.log(rezultatas);
    document.write(`<p>${rezultatas}</p>`);
    rezultatas = ""

}




console.log('---------------ciklai 2 - 8 UZDUOTIS------------------');
document.write('<br>')
document.write('---------------8 UZDUOTIS------------------');
document.write('<br>')

// Jums duotas stringas su skaičiais “54 77 2 59 17 19 108” suraskite jame didžiausią ir mažiausią skaičių.

stringas = '54 77 2 59 17 19 108'
document.write(stringas);
document.write('<br>')
ilgis = stringas.length;
skaicius = "";
let max = 0;
let min = 0;
y=0

for (i = 0; i < ilgis; i++) {
    if (stringas[i] !== ' ') {
        skaicius += stringas[i];
    }
    if (stringas[i] === ' ' || i === ilgis - 1) {
        if (parseInt(skaicius) > max) { max = parseInt(skaicius) }
        if (y===0) {min = parseInt(skaicius)} else if       
        (parseInt(skaicius) < min) { min = parseInt(skaicius) }
        y++;
        skaicius = "";
    }

}

document.write(`Mažiausias sekos skaičius : ${min}.`)
document.write('<br>')
document.write(`Didžiausias sekos skaičius : ${max}.`)