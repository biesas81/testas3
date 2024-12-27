import { useState } from 'react'
import SearchComplete from './components/autocomplete.jsx'
import Game from './components/kryziukai-nuliukai.jsx'

import './App.css'

function App() {
  let [index, setIndex] = useState(0)

  const handleClick = (e) => {   
    setIndex(++index); 
   }

   const handleClick2 = (e) => {   
    setIndex(--index); 
   }

  
  return (
    <>
    <h1>{index}</h1>
    <button onClick={handleClick}>Pridėti</button>
    <button onClick={handleClick2}>Atimti</button>
    <SearchComplete />
    <Game />
    </>
  )





}

export default App
