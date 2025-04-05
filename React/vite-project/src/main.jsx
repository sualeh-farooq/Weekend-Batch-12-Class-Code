import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Products from './Pages/Products.jsx'
import { BrowserRouter , Routes , Route } from 'react-router'
import ProductView from './Pages/ProductView.jsx'
import Contact from './Pages/Contact.jsx'
import AppStore from './Context/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AppStore>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/products' element={<Products />}  />
      <Route path='/contact' element={<Contact />}  />
      <Route path='/productview/:id' element={<ProductView />}  />
    </Routes>
    </BrowserRouter>
   </AppStore>
  </StrictMode>,
)
