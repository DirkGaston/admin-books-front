import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PageLayout from './layouts/PageLayout';
import Home from './pages/HomePage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<Home />} />        
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
