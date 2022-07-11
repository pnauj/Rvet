import React from "react";
import {Table, Container, Button} from "react-bootstrap";
import Turnos from "./turnos/Turnos";

const TurnoTabla = () => {
  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Turnos Tabla</h1>
          <Button className="btn-yellow">Agregar Turnos</Button>
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
            <Turnos />
            <Turnos />
            <Turnos />
            <Turnos />
            <Turnos />
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
