import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail.jsx';
import Portfolio from './pages/Portfolio.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Portfolio />} />
          <Route path="projectDetail/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
