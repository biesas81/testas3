import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Single from './pages/Single.jsx';
import Category from './pages/Category.jsx';
import Glass from './pages/Glass.jsx';
import Ingredient from './pages/Ingredient.jsx';
import Header from './components/header.jsx';
import ByLetter from './pages/Letter.jsx';
import Lucky from './pages/Lucky.jsx';

const App = () => {
    const [keyword, setKeyword] = useState('');
    const [refresh, setRefresh] = useState(false);
    
    return (
      <BrowserRouter>
        <div className="mt-5 container">
          <Header keyword={keyword} setKeyword={setKeyword} setRefresh={setRefresh} />
          <Routes>
            <Route path="/" element={<Home setKeyword={setKeyword} keyword={keyword} />} />
            <Route path="/single/:id" element={<Single />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/glass/:id" element={<Glass />} />
            <Route path="/ingredient/:id" element={<Ingredient />} />
            <Route path="/byletter/:id" element={<ByLetter />} />
            <Route path="/lucky" element={<Lucky refresh={refresh} setRefresh={setRefresh} />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }

  export default App;
