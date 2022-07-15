const erTexto = /^[A-Za-z\s?]+$/;
const erVet = /^[A-Za-z\s?]+$/;



export const validateTexto = (campo) => {
    if (erTexto.test(campo) && campo.trim().length < 45 && campo.trim() !== "") {
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
  