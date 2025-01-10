import express from 'express';
import mongoose from 'mongoose';

const app = express();

// testavimas:
// try {
//     await mongoose.connect('mongodb://127.0.0.1:27017/products');
//     console.log('veikia')
// } catch (error) {
//     console.log('neeeeveikia')
// }
// app.post('/', async (req, res) => {
//     res.json('Hello');
// });

await mongoose.connect('mongodb://127.0.0.1:27017/products');

const Products = mongoose.model('Products', { name: String,  description: String, category: String, thumbnail: String, price: Number, discount_percentage: Number, stock: Number, rating: Number });

// Konfiguracinė eilutė norint gauti duomenis JSON formatu
app.use(express.json());

app.get('/', async (req, res) => {
    // find() metodas modelyje grąžina visus įrašus iš duomenų bazės
    const data = await Products.find(); 
    res.json(data);
});

app.get('/:id', async (req, res) => {
    // findById() metodas modelyje grąžina įrašą pagal id iš duomenų bazės
    const data = await Products.findById(req.params.id); 
    res.json(data);
});

app.post('/', async (req, res) => {
    // create() metodas modelyje sukuria naują įrašą
    await Products.create(req.body); 
    res.json('Produktas sekmingai pridėtas');
});

app.put('/:id', async (req, res) => {
    // findByIdAndUpdate() metodas modelyje suranda irasa pagal id ir atnaujina jo duomenis
    await Products.findByIdAndUpdate(req.params.id, req.body); 

    res.json('Produktas sėkmingai atnaujintas');
});

app.delete('/:id', async (req, res) => {
    // findByIdAndUpdate() metodas modelyje suranda irasa pagal id ir ji istrina
    await Products.findByIdAndDelete(req.params.id); 

    res.json('Produktas sėkmingai pašalintas');
});





app.listen(3000);