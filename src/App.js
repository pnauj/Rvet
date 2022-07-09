import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navigation from './components/layout/Navigation';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';



function App() {
  return (
    <div>
     <Navigation />
     <Home />
     <Footer />
    </div>
  );
}

export default App;
