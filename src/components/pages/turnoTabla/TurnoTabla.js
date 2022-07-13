import React from "react";
import { Table, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Turnos from "./turnos/Turnos";

const TurnoTabla = ({ turnos }) => {
  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Turnos Tabla</h1>
          <Link to="/turnos/create" className="btn btn-success">
            Agregar Turnos
          </Link>
        </div>
        <hr />
        <Table bordered hover responsive className="align-middle mt-3">
          <thead>
            <tr>
              <th>Detalle</th>
              <th>Veterinario</th>
              <th>Nombre Mascota</th>
              <th>Fecha</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
            {turnos.map((turno) => (
              <Turnos turno={turno}/>
            ))}
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

export default TurnoTabla;
