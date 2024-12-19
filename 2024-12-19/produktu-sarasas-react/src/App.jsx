import { useState } from 'react'
import './App.css'
import data from './components/products.js'
import Product from './components/Product.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="container">
        <div className="shop">
          <table className="table">
            <thead>
              <tr>
                <th>Prekė</th>
                <th>Aprašas</th>
                <th>Kaina</th>
              </tr>
            </thead>
            <tbody>
              {data.map((reiksme, indeksas) =>
                <Product
                  pavadinimas={reiksme.title}
                  aprasymas={reiksme.description}
                  foto={reiksme.thumbnail}
                  nuolaida={reiksme.discountPercentage}
                  nuotrauka={reiksme.thumbnail}
                  rating={reiksme.rating}
                  kaina={reiksme.price}
                  key={indeksas}
                />
              )}
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default App
