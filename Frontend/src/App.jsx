import { Router, Routes } from 'react-router';
import './App.css'
import LoginForm from './components/login';
import SignUpForm from './components/signup';
import { Route } from 'react-router';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import Dashboard from './components/dashboard';
import AboutPage from './components/about';
import ContactPage from './components/contact';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
        <Footer />
    </>
  )
}

export default App
