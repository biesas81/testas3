import express from 'express';
import mongoose from 'mongoose';

const app = express();

// testavimas:
// try {
//     await mongoose.connect('mongodb://127.0.0.1:27017/posts');
//     console.log('veikia')
// } catch (error) {
//     console.log('neeeeveikia')
// }
// app.post('/', async (req, res) => {
//     res.json('Hello');
// });



// Prisijungimas prie duomenu bazes
await mongoose.connect('mongodb://127.0.0.1:27017/posts');

// Jeigu modelio pavadinimas irasomas vienaskaita, jis automatiskai pervadinimas i daugiskaitos forma
const Posts = mongoose.model('Posts', { pavadinimas: String, aprasymas: String });

// Konfiguracinė eilutė norint gauti duomenis JSON formatu
app.use(express.json());

// Visu Duomenu paemimas
app.get('/', async (req, res) => {
    // find() metodas modelyje grąžina visus įrašus iš duomenų bazės
    const data = await Posts.find(); 

    res.json(data);
});

// Duomens irasymas
app.post('/', async (req, res) => {
    // create() metodas modelyje sukuria naują įrašą
    await Posts.create(req.body); 

    res.json('Irasas sekmingai sukurtas');
});

// Duomens atnaujinimas
app.put('/:id', async (req, res) => {
    // findByIdAndUpdate() metodas modelyje suranda irasa pagal id ir atnaujina jo duomenis
    await Posts.findByIdAndUpdate(req.params.id, req.body); 

    res.json('Irasas sekmingai atnaujintas');
});

// Duomens istrynimas
app.delete('/:id', async (req, res) => {
    // findByIdAndUpdate() metodas modelyje suranda irasa pagal id ir ji istrina
    await Posts.findByIdAndDelete(req.params.id); 

    res.json('Irasas sekmingai istrintas');
});

app.listen(3000);

