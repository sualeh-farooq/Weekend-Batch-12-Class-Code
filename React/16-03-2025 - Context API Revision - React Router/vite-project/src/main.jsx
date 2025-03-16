import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import NotFound from './components/notFound.jsx'
import Products from './pages/Products.jsx'
import ViewProduct from './pages/viewProduct.jsx'
import AppProvider from './Context/store.js'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
        {/* <App /> */}

   <AppProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />

          <Route path='/products' element={<Products />} />
          

          {/** Dynamic Route */}
          <Route path='/product/:id' element={<ViewProduct />} />

        </Routes>
   </AppProvider>
    </BrowserRouter>
  </StrictMode>,
)
