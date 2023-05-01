import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// import About from './pages/About';
import Store from './pages/Store';
import Blog from './pages/Blog';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app__content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/store" element={<Store />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  

  );
}

export default App;
