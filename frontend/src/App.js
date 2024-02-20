import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import RegisterWoman from './pages/RegisterWoman';
import Hiring from './pages/Hiring';
import EmployeeDetails from './pages/EmployeeDetails';
import ForgotPassword from './pages/ForgotPassword';
import Yourjob from './pages/Yourjob';
import Courses from './pages/Courses';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Inspiring from './pages/Inspiring';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee/:id" element={<EmployeeDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/yourjob" element={<Yourjob />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/registerwoman" element={<RegisterWoman />} />
            <Route path="/hiring" element={<Hiring />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/inspiring" element={<Inspiring />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
