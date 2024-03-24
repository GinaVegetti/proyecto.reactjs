
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'



function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={<ItemListContainer saludo= 'Bienvenidos'/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        <Route path= '/category/:categoryId' element={<ItemListContainer saludo= 'BJJ WEAR'/>}/>
        </Routes>
      </BrowserRouter>
    </>
  
  )
}

export default App