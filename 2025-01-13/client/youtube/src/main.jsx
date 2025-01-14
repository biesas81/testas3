import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import NewVideo from './pages/NewVideo.jsx';
import SingleVideo from './pages/SingleVideo.jsx';
import EditVideo from './pages/EditVideo.jsx';
import Admin from './pages/Admin.jsx';
import Header from './components/header/Header.jsx';
import Search from './pages/Search.jsx';

createRoot(document.getElementById('root')).render(


  <BrowserRouter>
    <Header />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/new-video" element={<NewVideo />} />
        <Route path="/video/:id" element={<SingleVideo />} />
        <Route path="/edit-video/:id" element={<EditVideo />} />
        <Route path="/search/:text" element={<Search />} />
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