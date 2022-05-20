import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import ContractUs from './Pages/Home/ContractUs';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/SignUp/SignUp';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import Payment from './Pages/Dashboard/Payment';
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

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointments></MyAppointments>} ></Route>
          <Route path='review' element={<MyReview></MyReview>} ></Route>
          <Route path='history' element={<MyHistory></MyHistory>} ></Route>
          <Route path='payment/:id' element={<Payment></Payment>} ></Route>
          <Route path='users' element={

            <Users></Users>
          } ></Route>

          <Route path='addDoctor' element={
         
              <AddDoctor></AddDoctor>
            } ></Route>

        </Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
