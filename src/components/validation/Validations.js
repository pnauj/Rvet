const erNombre = /^[A-Za-z\s?]+$/;
const erVet = /^[A-Za-z\s?]+$/;
const erFecha = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;
const erHora = /^[0-9]+$/;
const erTel = /^[0-9]+$/;
const erEmail =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

export const validateTel = (campo) => {
  if (
    erTel.test(campo) &&
    campo.trim() &&
    campo.trim().length <= 11 &&
    campo.trim().length > 6
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateEmail = (campo) => {
  if (erEmail.test(campo) && campo.trim()) {
    return true;
  } else {
    return false;
  }
};

export const validateNombre = (campo) => {
  if (erNombre.test(campo) && campo.trim().length < 40 && campo.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validateVet = (campo) => {
  if (
    erVet.test(campo) &&
    campo.trim() !== "" &&
    (campo === "Dr Lopez" || campo === "Dra Rosario")
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateHora = (campo) => {
  if (
    erHora.test(campo) &&
    campo.trim() !== "" &&
    (campo === "09:00" ||
      campo === "10:00" ||
      campo === "11:00" ||
      campo === "12:00" ||
      campo === "16:00" ||
      campo === "17:00" ||
      campo === "18:00" ||
      campo === "19:00")
  ) {
    return true;
  } else {
    return false;
  }
};

let date = new Date();
let output =
  date.getFullYear() +
  "-" +
  `${date.getMonth() + 1}`.padStart(2, "0") +
  "-" +
  `${date.getDate()}`.padStart(2, "0");
let output2 =
  date.getFullYear() +
  "-" +
  `${date.getMonth() + 1 + 1}`.padStart(2, "0") +
  "-" +
  `${date.getDate()}`.padStart(2, "0");

export const validateFecha = (campo) => {
  console.log(output);
  console.log(campo);
  if (campo <= output2 && campo > output) {
    return true;
  } else {
    return false;
  }
};
