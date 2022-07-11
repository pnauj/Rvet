import { Button } from "react-bootstrap";
import React from "react";

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
          <Button className="btn-orange mx-1">Editar</Button>
          <Button className="btn-red mx-1">Eliminar</Button>
        </div>
      </td>
    </tr>
  );
};

export default Pacientes;
