import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navigation from './components/layout/Navigation';
import Home from './components/pages/home/Home';
import Footer from './components/layout/Footer'; 
import Error404 from './components/pages/error404/Error404';
import CardProduct from './components/pages/home/cards/Cards';



function App() {
  return (
    <div>
     <Navigation />
     <Home />
     <Footer />
     {/* <Error404 /> */}
     
    </div>

  );
}

export default App;
