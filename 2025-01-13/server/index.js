import express from 'express';
import mongoose from 'mongoose';

const app = express();

// testavimas:
// try {
//     await mongoose.connect('mongodb://127.0.0.1:27017/youtube');
//     console.log('veikia')
// } catch (error) {
//     console.log('neeeeveikia')
// }
// app.post('/', async (req, res) => {
//     res.json('Hello');
// });

await mongoose.connect('mongodb://127.0.0.1:27017/youtube');

const Clips = mongoose.model('Clips', { 
    title: String,
    description: String, 
    category: String,
    videoId: String,
    viewCount: Number
 });

// Konfiguracinė eilutė norint gauti duomenis JSON formatu
app.use(express.json());

app.get('/api', async (req, res) => {
    // find() metodas modelyje grąžina visus įrašus iš duomenų bazės
    const data = await Clips.find(); 
    res.json(data);
});

app.get('/api/:id', async (req, res) => {
    // findById() metodas modelyje grąžina įrašą pagal id iš duomenų bazės
    const data = await Clips.findById(req.params.id); 
    res.json(data);
});

app.get('/api/search/:text', async (req, res) => {
    const { text } = req.params; // Paieškos frazė iš URL parametro
    
    try {
        // Paieška pagal title ir description naudojant regex
        const results = await Clips.find({
            $or: [
                { title: { $regex: text, $options: 'i' } },  // "i" - ignoruojama didžiųjų ir mažųjų raidžių skirtumas
                { description: { $regex: text, $options: 'i' } }
            ]
        });

        if (results.length === 0) {
            return res.status(404).json({ message: 'Nėra rezultatų, atitinkančių paieškos frazę.' });
        }

        res.json(results); // Pateikiame paieškos rezultatus
    } catch (error) {
        console.error("Klaida paieškos metu:", error); // Loguojame klaidą
        res.status(500).json({ message: 'Klaida atliekant paiešką', error: error.message });
    }
});

app.post('/api', async (req, res) => {
    // create() metodas modelyje sukuria naują įrašą
    req.body.viewCount = 0;
    await Clips.create(req.body); 
    res.json('Produktas sekmingai pridėtas');
});

app.put('/api/:id', async (req, res) => {
    // findByIdAndUpdate() metodas modelyje suranda irasa pagal id ir atnaujina jo duomenis
    await Clips.findByIdAndUpdate(req.params.id, req.body); 

    res.json('Produktas sėkmingai atnaujintas');
});

app.put('/api/:id/increment-views', async (req, res) => {
    try {
        // Raskime video pagal ID ir padidinkime viewCount
        const updatedClip = await Clips.findByIdAndUpdate(
            req.params.id,
            { $inc: { viewCount: 1 } }, // Padidinkite viewCount per 1
            { new: true } // Grąžinkite atnaujintą įrašą
        );

        if (!updatedClip) {
            return res.status(404).json({ message: 'Video nerasta' });
        }

        res.json(updatedClip); // Grąžiname atnaujintą video su nauju viewCount
    } catch (error) {
        console.error('Klaida padidinant peržiūrų skaičių:', error);
        res.status(500).json({ message: 'Klaida padidinant peržiūrų skaičių', error: error.message });
    }
});


app.delete('/api/:id', async (req, res) => {
    // findByIdAndUpdate() metodas modelyje suranda irasa pagal id ir ji istrina
    await Clips.findByIdAndDelete(req.params.id); 

    res.json('Produktas sėkmingai pašalintas');
});

app.listen(3000);