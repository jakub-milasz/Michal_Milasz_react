import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Menu from './components/Menu';
import Home from './pages/Home'
import Gospodarcze from './pages/Gospodarcze'
import Ofe from './pages/Ofe'
import Bankowe from './pages/Bankowe'
import OMnie from './pages/OMnie'
import Cywilne from './pages/Cywilne'
import Spadek from './pages/Spadek'
import Przesyl from './pages/Przesyl'
import PrivacyPolicy from './pages/PrivacyPolicy'
import { useEffect } from 'react';
import { runOrphanFixer } from './utils/orphanFixer';


export default function App() {
  useEffect(() => {
    runOrphanFixer();
  }, []);
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gospodarcze" element={<Gospodarcze />} />
          <Route path="/ofe" element={<Ofe />} />
          <Route path="/bankowe" element={<Bankowe />} />
          <Route path="/o-mnie" element={<OMnie />} />
          <Route path="/cywilne" element={<Cywilne />} />
          <Route path="/spadek" element={<Spadek />} />
          <Route path="/przesyl" element={<Przesyl />} />
          <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
