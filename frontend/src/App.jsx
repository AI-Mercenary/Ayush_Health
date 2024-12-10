import './App.css';
import SchemeLayout from './pages/SchemeLayout';
import Layout from './components/Layout';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Srouting from './components/Srouting';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import UserInterface from './pages/UserInterface';
import EditProfile from './components/EditProfile';
import ChangePassword from './components/ChangePassword';
import AdminDashboard from './pages/AdminDashboard'; // Admin Dashboard Component
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Navigate to="/scheme" replace />} />
          <Route path="/scheme" element={<SchemeLayout />} />
          <Route path="/scheme/*" element={<Srouting />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/userinterface" element={<UserInterface />}>
            <Route path="editprofile" element={<EditProfile />} />
            <Route path="changepassword" element={<ChangePassword />} />
          </Route>
          <Route path="/admin" element={<AdminDashboard />} /> {/* Admin Route */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
