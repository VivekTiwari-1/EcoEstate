import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Park from './components/Park';
import SignIn from './components/Signin';
import Signup from './components/Signup';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/park' element={<Park />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
