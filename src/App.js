import './App.css';
import Loguin from './components/Loguin';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Registration from './components/Registration';
import AppSecond from './appSecond/AppSecond';
import Reservation from './components/Reservation';
import Delivery from './components/Delivery';
import Item from './components/Item';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Loguin />} />
   <Route path='/aplication' element={<AppSecond />} />
   <Route path='/registration' element={<Registration/>} />
   <Route path='/reservation' element={<Reservation/>} />
   <Route path='/delivery' element={<Delivery/>} />
   <Route path='/appSecond' element={<AppSecond/>} />
   <Route path='/idResto' element={<Item/>}/>
   </Routes>
   </BrowserRouter>
   </>

  );
}

export default App;
