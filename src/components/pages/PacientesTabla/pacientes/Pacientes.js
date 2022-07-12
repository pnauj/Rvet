import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const Pacientes = () => {
  return (
    <tr>
      <td>Jose</td>
      <td>Armando</td>
      <td>josearmando@correo.com</td>
      <td>2614325685</td>
      <td>Boby</td>
      <td>Perro</td>
      <td>Ovejero Aleman</td>
      <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link to="/pacientes/edit" className="btn btn-warning mx-1">Editar</Link>
          <Button className="btn btn-danger mx-1">Eliminar</Button>
        </div>
      </td>
    </tr>
  );
};

export default Pacientes;
