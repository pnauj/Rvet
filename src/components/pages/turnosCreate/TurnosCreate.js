import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import {
  validateFecha,
  validateHora,
  validateNombre,
  validateVet,
} from "../../validation/Validations";

const TurnosCreate = ({ URL }) => {
  const [detalle, setDetalle] = useState("");
  const [vet, setVet] = useState("");
  const [nombreM, setNombreM] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !validateNombre(detalle) ||
      !validateVet(vet) ||
      !validateNombre(nombreM) ||
      !validateFecha(fecha) ||
      !validateHora(hora)
    ) {
      alert("algo salio mal");
      return;
    }

    const newTurno = {
      detalle,
      vet,
      nombreM,
      fecha,
      hora,
    };

    Swal.fire({
      title: "Esta seguro?",
      text: "Revise los datos antes de enviar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Guardar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTurno),
          });
          console.log(res);
        } catch (error) {
          console.log(error);
        }
        Swal.fire("Guardado!", "Su turno fue guardado con exito.", "success");
      }
    });
  };

  return (
    <div>
      <Container className="py-5">
        <h1>Agregar Turnos</h1>
        <hr />
        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Detalle de la cita</Form.Label>
            <Form.Control
              maxLength="100"
              as="textarea"
              rows={3}
              placeholder="Escriba el detalle"
              onChange={({ target }) => setDetalle(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Veterinario</Form.Label>
            <Form.Select onChange={({ target }) => setVet(target.value)}>
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
              onChange={({ target }) => setNombreM(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              placeholder="Ej: 01/01/22"
              onChange={({ target }) => setFecha(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Horario</Form.Label>
            <Form.Select onChange={({ target }) => setHora(target.value)}>
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
            <Button className="btn-yellow">Guardar</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default TurnosCreate;
