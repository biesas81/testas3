

console.log("------8 užduotis:------");

let viens = random(0, 2)
let dju = random(0, 2)
let tri = random(0, 2)
let ketur = random(0, 2)

let nuliai = 0
let vienetai = 0
let dvejetai = 0

if (viens == 0) { nuliai += 1 }
if (dju == 0) { nuliai += 1 }
if (tri == 0) { nuliai += 1 }
if (ketur == 0) { nuliai += 1 }

if (viens == 1) { vienetai += 1 }
if (dju == 1) { vienetai += 1 }
if (tri == 1) { vienetai += 1 }
if (ketur == 1) { vienetai += 1 }

if (viens == 2) { dvejetai += 1 }
if (dju == 2) { dvejetai += 1 }
if (tri == 2) { dvejetai += 1 }
if (ketur == 2) { dvejetai += 1 }



console.log(viens, dju, tri, ketur);

console.log(`Nuliai: ${nuliai}`);
console.log(`Vienetai: ${vienetai}`);
console.log(`Dvejetai: ${dvejetai}`);


console.log("------9 užduotis:------");

let odyn = random(-10, 10)
let dva = random(-10, 10)
let tre = random(-10, 10)

if (odyn === 0) { console.log(`( ${odyn})`); } else
    if (odyn > 0) { console.log(`{ ${odyn}}`); }
    else { console.log(`[ ${odyn}]`); }

if (dva === 0) { console.log(`( ${dva})`); } else
    if (dva > 0) { console.log(`{ ${dva}}`); }
    else { console.log(`[ ${dva}]`); }

if (tre === 0) { console.log(`( ${tre})`); } else
    if (tre > 0) { console.log(`{ ${tre}}`); }
    else { console.log(`[ ${tre}]`); }

console.log("------10 užduotis:------");

let kiekis = random(5, 3000)
let kaina = 1
let nuolaida3 = 0.97
let nuolaida4 = 0.96

if (kiekis < 1000) { console.log(`Žvakių kiekis - ${kiekis}, po ${kaina} EUR.`) }
else if (kiekis < 2000) { console.log(`Žvakių kiekis - ${kiekis}, po ${kaina * 0.97} EUR.`) }
else console.log(`Žvakių kiekis - ${kiekis}, po ${kaina * 0.96} EUR.`);

console.log("------11 užduotis:------");

let a = random(0, 100)
let b = random(0, 100)
let c = random(0, 100)
let vidurkis1 = Math.round((a + b + c) / 3)
let vidurkis2 = 0
console.log(a, b, c);
console.log(`aritmetinis vidurkis ${vidurkis1}`);

if (a < 10) {
    if (b < 10) {
        if (c < 10) { console.log(0) }
        else if (c > 90) { console.log(0) } else (console.log(c))
    }

    else if (b > 90) {
        if (c < 10) { console.log(0) }
        else if (c > 90) { console.log(0) } else (console.log(c))
    }
    else {
        if (c < 10) { console.log(b) }
        else if (c > 90) { console.log(b) } else (console.log(Math.round((b + c) / 2)))
    }
}
else if (a > 90) {
    if (b < 10) {
        if (c < 10) { console.log(0) }
        else if (c > 90) { console.log(0) } else (console.log(c))
    }

    else if (b > 90) {
        if (c < 10) { console.log(0) }
        else if (c > 90) { console.log(0) } else (console.log(c))
    }
    else {
        if (c < 10) { console.log(b) }
        else if (c > 90) { console.log(b) } else (console.log(Math.round((b + c) / 2)))
    }
}

else  if (b < 10) {
    if (c < 10) { console.log(a) }
    else if (c > 90) { console.log(a) } else (console.log(Math.round((a+c)/2)))
}

else if (b > 90) {
    if (c < 10) { console.log(a) }
    else if (c > 90) { console.log(a) } else (console.log(Math.round((a+c)/2)))
}
else {
    if (c < 10) { console.log(Math.round((a+b)/2)) }
    else if (c > 90) { console.log(Math.round((a+b)/2)) } else (console.log(Math.round((a + b + c) / 3)))
}



