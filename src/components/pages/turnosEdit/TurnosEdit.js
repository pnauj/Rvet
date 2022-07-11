import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const TurnosEdit = () => {
  return (
    <div>
      <Container className="py-5">
        <h1>Editar</h1>
        <hr />
        <Form className="my-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Detalle de la cita</Form.Label>
            <Form.Control
              maxLength="100"
              as="textarea"
              rows={3}
              placeholder="Escriba el detalle"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Veterinario</Form.Label>
            <Form.Select>
              <option value="">Elige una opcion</option>
              <option value="Dr Lopez">Dr Lopez</option>
              <option value="Dra Rosario">Dra Rosario</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre de la Mascota</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escriba el nombre de la mascota"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="date" placeholder="Ej: 01/01/22" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Horario</Form.Label>
            <Form.Select>
              <option value="">Elige una opcion</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
            </Form.Select>
          </Form.Group>
          <div className="text-end">
            <Button className="btn-yellow">Guardar Cambios</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default TurnosEdit;
