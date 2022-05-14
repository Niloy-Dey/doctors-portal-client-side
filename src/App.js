import './App.css';
import Navbar from  './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import ContractUs from './Pages/Home/ContractUs';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/SignUp/SignUp';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path='login' element={<Login></Login>} />
        <Route path='signUp' element={<SignUp></SignUp>} />
        <Route path='/contract' element={<ContractUs></ContractUs>}></Route>
        <Route path='/appointment' element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
        }></Route>
        <Route path='/review' ></Route>
      </Routes>
     
    </div>
  );
}

export default App;
