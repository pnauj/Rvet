import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navigation from "./components/layout/Navigation";
import Home from "./components/pages/home/Home";
import Footer from "./components/layout/Footer";
import Error404 from "./components/pages/error404/Error404";
import CardProduct from "./components/pages/home/cards/Cards";
import PacientesCreate from "./components/pages/pacientesCreate/PacientesCreate";
import PacientesEdit from "./components/pages/pacientesEdit/PacientesEdit";
import PacientesTabla from "./components/pages/PacientesTabla/PacientesTabla";
import TurnosCreate from "./components/pages/turnosCreate/TurnosCreate";
import TurnosEdit from "./components/pages/turnosEdit/TurnosEdit";
import TurnoTabla from "./components/pages/turnoTabla/TurnoTabla";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pacientes/tabla" element={<PacientesTabla />} />
            <Route
              exact
              path="/pacientes/create"
              element={<PacientesCreate />}
            />
            <Route exact path="/pacientes/edit" element={<PacientesEdit />} />
             <Route exact path="/turnos/tabla" element={<TurnoTabla />} />
            <Route exact path="/turnos/create" element={<TurnosCreate />} />
            <Route exact path="/turnos/edit" element={<TurnosEdit />} />
            <Route exact path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

//video 00:00:19
