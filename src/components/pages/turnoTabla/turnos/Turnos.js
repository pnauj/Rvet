import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="/turnos/edit" className="btn btn-warning mx-1">Editar</Link>
          <Button className="btn btn-danger mx-1">Eliminar</Button>
        </div>
      </td>
    </tr>
  );
};

export default Turnos;
