const erNombre = /^[A-Za-z\s?]+$/;
const erVet = /^[A-Za-z\s?]+$/;
const erFecha = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;
const erHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;



export const validateNombre = (campo) => {
    if (erNombre.test(campo) && campo.trim().length < 45 && campo.trim() !== "") {
      return true;
    } else {
      return false;
    }
  };

  export const validateVet = (campo) => {
    if (
      erVet.test(campo) &&
      campo.trim() !== "" &&
      (campo === "Dr Lopez" ||
        campo === "Dra Rosario"
        )
    ) {
      return true;
    } else {
      return false;
    }
  };
  