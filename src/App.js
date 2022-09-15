import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';





function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movies" element={<SearchPage />} />
          </Routes>
          <Footer/>      
      </div>
    </BrowserRouter>
    
  );
}

export default App;
