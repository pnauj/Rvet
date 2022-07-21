import React from "react";
import { Formik } from "formik";
import { Button, Container, Form } from "react-bootstrap";

const PacientesCreate = () => {
  return (
    <>
      <Container className="py-5">
        <h1>Agregar Pacientes</h1>
        <hr />
        <Formik
          onSubmit={() => {
            console.log("formulario enviado");
          }}
        >
          {() => (
            <Form className="my-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Escriba su nombre" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Escriba su Apellido" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ej: ejemplo@correo.com"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="number" placeholder="Escriba su telefono" />
              </Form.Group>
              <hr />
              <h3>Datos de la Mascotas</h3>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escriba el nombre de mascota"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Especie</Form.Label>
                <Form.Select>
                  <option value="">Elija una opcion</option>
                  <option value="Perro">Perro</option>
                  <option value="Gato">Gato</option>
                  <option value="Aves">Aves</option>
                  <option value="Otro">Otro</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Raza</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escriba la raza de su mascota"
                />
              </Form.Group>
              <div className="text-end">
                <Button className="btn-yellow">Guardar</Button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default PacientesCreate;
