import React from "react";
import { Formik } from "formik";
import { Button, Container, Form } from "react-bootstrap";
import { validateNombre } from "../../validation/Validations";

const PacientesCreate = () => {
  return (
    <>
      <Container className="py-5">
        <h1>Agregar Pacientes</h1>
        <hr />
        <Formik
          initialValues={{
            Nombre: "",
            Apellido: "",
            Email: "",
            Telefono: "",
            NombreMascota: "",
            Especie: "",
            Raza: "",
          }}
          validate={(valores) => {
            let errores = {};

            if (!valores.Nombre) {
              errores.Nombre = "Por favor ingrese su nombre";
            } else if(!validateNombre.test(valores.Nombre)) {
              errores.Nombre = 'El nombre solo puede contener letras'
            }

            return errores;
          }}
          onSubmit={(valores) => {
            console.log(valores);
            console.log("formulario enviado");
          }}
        >
          {({ values,errors, handleChange, handleSubmit, handleBlur }) => (
            <Form className="my-5" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="Nombre"
                  id="Nombre"
                  placeholder="Escriba su nombre"
                  value={values.Nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                 {errors.Nombre && <div className="text-danger">{errors.Nombre}</div>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="Apellido"
                  id="Apellido"
                  placeholder="Escriba su Apellido"
                  value={values.Apellido}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="Email"
                  id="Email"
                  placeholder="Ej: ejemplo@correo.com"
                  value={values.Email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="number"
                  name="Telefono"
                  id="Telefono"
                  placeholder="Escriba su telefono"
                  value={values.Telefono}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>
              <hr />
              <h3>Datos de la Mascotas</h3>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nombre Mascota</Form.Label>
                <Form.Control
                  type="text"
                  name="NombreMascota"
                  id="NombreMascota"
                  placeholder="Escriba el nombre de mascota"
                  value={values.NombreMascota}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Especie</Form.Label>
                <Form.Select
                  value={values.Especie}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
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
                  name="Raza"
                  id="Raza"
                  placeholder="Escriba la raza de su mascota"
                  value={values.Raza}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>
              <div className="text-end">
                <Button type="submit" className="btn-yellow">
                  Guardar
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default PacientesCreate;

//video formik 00:32:00
