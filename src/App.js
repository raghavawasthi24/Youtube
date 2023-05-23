import { Routes,Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import MainPage from './pages/MainPage/MainPage';
import Card from './components/Card/Card';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/card" element={<Card/>}/>
      <Route path="/navbar" element={<Navbar/>}/>
    </Routes>
  );
}

export default App;
