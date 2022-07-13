import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const Turnos = ({turno}) => {
  return (
    <tr>
      <td>{turno.detalle}</td>
      <td>{turno.vet}</td>
      <td>{turno.nombreM}</td>
      <td>{turno.fecha}</td>
      <td>{turno.hora}</td>
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
