import { useState } from 'react'
import './App.css'
import Logo from './components/logo/Logo.jsx'
import Search from './components/search/Search.jsx'
import Navigation from './components/navigation/Navigation.jsx'
import Intro from './components/intro/Intro.jsx'
import Card from './components/cards/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="container d-flex justify-content-between">
        <div className="d-flex">
          <div><Logo /></div>
          <div><Search /></div>
        </div>
        <div><Navigation /></div>
      </header>
      <main className="container">
        <Intro />

      </main>
      <footer className="container">
        <Card />




      </footer>




    </>
  )
}

export default App
