import { Routes,Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import MainPage from './pages/MainPage/MainPage';
import Card from './components/Card/Card';
import VideoPlayPage from './pages/VideoPlayPage/VideoPlayPage';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
    <Navbar/>
    <div className='homepage' style={{display:"flex",justifyContent:"space-between"}}>
      <Sidebar/>
    <Routes>
      
      <Route path="/" element={<MainPage/>}/>
      <Route path="/card" element={<Card/>}/>
      
      {/* <Route path="/navbar" element={<Sidebar/>}/> */}
      <Route path="/video" element={<VideoPlayPage/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
