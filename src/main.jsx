import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from'react-router-dom'
import ProjectDetail from './components/ProjectDetail.jsx'
import Portfolio from './pages/Portfolio.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const router =createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
      <Route index element={<Portfolio />} />
    <Route path='projectDetail/:id' element={<ProjectDetail/>}/>
  </Route>
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
