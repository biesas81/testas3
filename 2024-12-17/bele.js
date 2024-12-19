const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const corectEmail = 'admin@vcs.lt';
const corectPassword = 'Github12';

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

rl.question('Įveskite savo emailą:', (email) => {
    rl.question('Įveskite password:', (password) => {
        if (!email && !password) {
            console.log("Negavome jokių duomenų, bandykite dar kartą");
        } else if (!email) {
            console.log("Negavome el. pašto adreso, bandykite dar kartą");
        } else if (!password) {
            console.log("Negavome slaptažodžio, bandykite dar kartą");
        }
        else if (!validateEmail(email)) {
            console.log("El. pašto adresas yra netinkamo formato");
        }
        else if (email === corectEmail && password === corectPassword) {
            console.log("Sveikiname sėkmingai prisijungus");
        } else {
            console.log("Neteisingi prisijungimo duomenys");
        }
        rl.close();
    });
});