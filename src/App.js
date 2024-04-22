// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Nopage from './pages/Nopage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<Home />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
