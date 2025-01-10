import express from 'express'
const app = express()

app.post('/register', function (req, res) {

    const { name, last_name, email, password } = req.query;

    if (!name || !last_name || !email || !password) {
        res.json({ message: "Negauti registracijos duomenys" });
        return;
    }

    if (name.length < 3 || name.length > 200) {
        res.json({ message: "Vardas privalo būti nuo 3 iki 200 simbolių ilgio" });
        return;
    }

    if (last_name.length < 3 || last_name.length > 200) {
        res.json({ message: "Pavardė privalo būti nuo 3 iki 200 simbolių ilgio" });
        return;
    }

    if (email.length < 5 || email.length > 50 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        res.json({ message: "Neteisingas el. pašto adresas. Jis privalo būti nuo 5 iki 50 simbolių ir atitikti el. pašto formatą" });
        return;
    }

    if (password.length < 8 || password.length > 16 || !/\d/.test(password)) {
        res.json({ message: "Slaptažodis privalo būti nuo 8 iki 16 simbolių ir turėti bent vieną skaičių" });
        return;
    }

    res.json({ message: "Sveikiname sėkmingai prisiregistravus platformoje" });
});

app.post('/login', function (req, res) {

    const { email, password } = req.query;
    const correctEmail = "admin@vcs.lt";
    const correctPassword = "Github12";

    if (!email || !password) {
        res.json({ message: "Negavome jokių duomenų, bandykite dar kartą" });
        return;
    }

    if (email === correctEmail && password === correctPassword) {
        res.json({ message: "Sveikiname sėkmingai prisijungus" });
    } else {
        res.json({ message: "Neteisingi prisijungimo duomenys" });
    }
});


app.listen(3000)