import { Button } from "react-bootstrap";
import React from "react";

const Turnos = () => {
  return (
    <tr>
      <td>Chequeo Anual</td>
      <td>Dr Lopez</td>
      <td>Rolo</td>
      <td>17/07/2022</td>
      <td>18:00</td>
      <td className="w-25">
        <div className="d-flex justify-content-center">
          <Button className="btn-orange mx-1">Editar</Button>
          <Button className="btn-red mx-1">Eliminar</Button>
        </div>
      </td>
    </tr>
  );
};

export default Turnos;
