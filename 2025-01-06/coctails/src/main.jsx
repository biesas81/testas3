import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css'
import Header from './components/Header.jsx';
import SingleDrink from './pages/SingleDrink.jsx';


createRoot(document.getElementById('root')).render(
 
<BrowserRouter>
    <Header/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<SingleDrink />} />
       {/*  <Route path="/alcoholic/:yesno" element={<AlcoYesNo />} />
        <Route path="/category/:category" element={<SinglePost />} />
        <Route path="/glass/:glass" element={<EditPost />} />
        <Route path="/ingredient/:ingredient" element={<EditPost />} />
        <Route path="/random" element={<EditPost />} />
        <Route path="/letter/:letter" element={<EditPost />} /> */}
        <Route path="*" element={<h1>Toks puslapis nerastas</h1>} />
      </Routes>
    </div>
  </BrowserRouter>


  
)
