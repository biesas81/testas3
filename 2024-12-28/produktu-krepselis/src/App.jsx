import { useState } from 'react'
import Shop from './components/Shop.jsx';
import Cart from './components/Cart.jsx';
import './App.css'

function App() {
  
  const [showCart, setShowCart] = useState(false);
  const [krepselis, setKrepselis] = useState([]);

  return (
    <>
    <div className="main">
     
      {!showCart ?
        <Shop 
          setKrepselis={setKrepselis} 
          krepselis={krepselis}
          setShowCart={setShowCart} 
        />
        :
        <Cart 
        setShowCart={setShowCart} 
        krepselis={krepselis}
        setKrepselis={setKrepselis} 

        />
      }
     </div>
   
    </>
  )
}

export default App
