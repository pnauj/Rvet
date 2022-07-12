import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pacientes from "./pacientes/Pacientes";

const PacientesTabla = () => {
  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Pacientes Tabla</h1>
          <Link to="/pacientes/create" className="btn btn-success">Agregar Pacientes</Link>
        </div>
        <hr />
        <Table bordered hover responsive className="align-middle mt-3">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Numero</th>
              <th>NombreMascota</th>
              <th>Especie</th>
              <th>Raza</th>
            </tr>
          </thead>
          <tbody>
            <Pacientes />
            <Pacientes />
            <Pacientes />
            <Pacientes />
            <Pacientes />
            <Pacientes />
            <Pacientes />
          </tbody>
        </Table>
        {/* No products found message */}
        {/* <div className="no-products-found d-flex align-items-center justify-content-center">
          <h1>🥐 No products found ☕</h1>
        </div> */}
      </Container>
    </div>
  );
};

export default PacientesTabla;
