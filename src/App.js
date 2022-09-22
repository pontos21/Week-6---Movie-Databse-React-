import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';
import MovieInfo from './pages/MovieInfo';





function App() {
  return (
    <Router>
      <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movies" element={<SearchPage />} />
            <Route path="/moviesInfo" element={<MovieInfo />} />
          </Routes>
          <Footer/>      
      </div>
    </Router>
    
  );
}

export default App;
