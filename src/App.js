import './App.css';
import Navbar from  './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import ContractUs from './Pages/Home/ContractUs';
import Appointment from './Pages/Appointment/Appointment';
function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path='login' element={<Login></Login>} />
        <Route path='/contract' element={<ContractUs></ContractUs>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
