import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navigation from './components/layout/Navigation';
import Home from './components/pages/home/Home';
import Footer from './components/layout/Footer'; 
import Error404 from './components/pages/error404/Error404';
import CardProduct from './components/pages/home/cards/Cards';
import PacientesCreate from './components/pages/pacientesCreate/PacientesCreate';
import PacientesEdit from './components/pages/pacientesEdit/PacientesEdit';
import PacientesTabla from './components/pages/PacientesTabla/PacientesTabla';



function App() {
  return (
    <div>
     {/* <Navigation />
     <Home />
     <Footer />
     <Error404 /> */}
     {/* <PacientesCreate /> */}
     {/* <PacientesEdit /> */}
     {/* <PacientesTabla /> */}
     
    </div>

  );
}

export default App;
