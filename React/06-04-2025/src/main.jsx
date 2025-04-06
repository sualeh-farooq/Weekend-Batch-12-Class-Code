import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter , Route , Routes} from 'react-router'
import Home from './Pages/Home.jsx'
import Users from './Pages/User.jsx'
import Tasks from './Pages/Tasks.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path='/'   element={<Home />} />
        <Route path='/users'  element={<Users />}  />
        <Route path='/users/:id'  element={<Users />}  />
        <Route path='/tasks' element={<Tasks />}  />
        <Route path='*' element={<Tasks />}  />
      </Routes>
      </BrowserRouter>
  </StrictMode>,
)
