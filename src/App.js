import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import MultiLayerParallax from './components/MultilayerParallax';
import Navbar from './components/Navbar/Navbar';
import Park from './components/Park';


function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/park' element={<Park />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
