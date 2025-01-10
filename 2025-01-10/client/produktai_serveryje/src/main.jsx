import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import NewProduct from './pages/NewProduct.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import EditProduct from './pages/EditProduct.jsx';
import Admin from './pages/Admin.jsx';
import Header from './components/header/Header.jsx';

createRoot(document.getElementById('root')).render(


  <BrowserRouter>
    <Header />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/new-product" element={<NewProduct />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />

        <Route path="*" element={<h1>Toks puslapis nerastas</h1>} />
      </Routes>
    </div>
  </BrowserRouter>
)

// CRUD
// CREATE 
// READ
// UPDATE
// DELETE