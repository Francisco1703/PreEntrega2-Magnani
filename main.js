/****** Solicitantes de veca CoderHouse ******/

class Solicitante {
  constructor(nombre, apellido, edad, dni, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dni = dni;
    this.email = email;
  }
}

//Solicitantes:

const solicitanteFrancisco = new Solicitante(
  "Francisco",
  "Magnani",
  19,
  45422853,
  "fmagnani1712@gmail.com"
);
const solicitanteRaul = new Solicitante(
  "Raul",
  "Alfonsin",
  96,
  0000017,
  "ElRauAlfonseke@cielo.com"
);
const solicitanteGoku = new Solicitante(
  "Son",
  "Goku",
  1150,
  0000005,
  "SonGoku@KameHameHa.com"
);
const solicitanteGerardo = new Solicitante(
  "Gerardo",
  "Ramondino",
  25,
  48563254,
  "GeriRamondi@gmail.com"
);

const arraySolicitantes = [
  solicitanteFrancisco,
  solicitanteRaul,
  solicitanteGoku,
  solicitanteGerardo,
];

console.log(arraySolicitantes);

//Function con el menu de opciones:

function menu() {
  alert("¡Bienvenido a la solicitud de vecas de CoderHouse!");
  let opcion = parseInt(
    prompt(
      "Ingrese el numero de la opcion que se adecúe a sus necesidades: 1) Solicitar veca  2) Dar veca de baja  3) Modificación de solicitante 4) Consulta de solicitante  5) Salir"
    )
  );
  return opcion;
}

//function con la opcion solicitar veca:

function solicitarVeca() {
  let nombre = prompt("Ingrese su/s nombre/s: ");
  let apellido = prompt("Ingrese su apellido: ");
  let edad = parseInt(prompt("Ingrese su edad: "));
  let dni = parseInt(prompt("Ingrese su DNI: "));
  let email = prompt("Ingrese su email: ");

  let solicitante = new Solicitante(nombre, apellido, edad, dni, email);
  arraySolicitantes.push(solicitante);
  console.log(arraySolicitantes);
  alert(
    "A la brevedad, le mandaremos un email informandole la condicion de su veca. Gracias por confiar en CoderHouse."
  );
}

//function para dar una veca de baja:

function bajaVeca() {
  let dni = parseInt(prompt("Ingrese su dni: "));
  let solicitante = arraySolicitantes.find(
    (solicitante) => solicitante.dni === dni
  );
  let indice = arraySolicitantes.indexOf(solicitante);
  arraySolicitantes.splice(indice, 1);
  console.log(arraySolicitantes);
}

//function para modificar los datos del solicitante:

function modificarSolicitante() {
  let dni = parseInt(prompt("Ingrese el DNI del solicitante: "));
  let solicitante = arraySolicitantes.find(
    (solicitante) => solicitante.dni === dni
  );
  let indice = arraySolicitantes.indexOf(solicitante);

  let nombre = prompt("Ingrese el nombre del solicitante: ");
  let apellido = prompt("Ingrese el apellido del solicitante: ");
  let edad = parseInt(prompt("Ingrese la edad del solicitante: "));
  let email = prompt("Ingrese el email del solicitante: ");

  let solicitantemodificado = new Solicitante(
    nombre,
    apellido,
    edad,
    dni,
    email
  );
  arraySolicitantes.splice(indice, 1, solicitantemodificado);
  console.log(arraySolicitantes);
}

//function para consultar un solicitante:

function consultarSolicitante() {
  let dni = parseInt(prompt("Ingrese el DNI del solicitante: "));
  let solicitante = arraySolicitantes.find(
    (solicitante) => solicitante.dni === dni
  );
  console.log(solicitante);
}

//function para salir:

function salir() {
  alert("Gracias por su visita, esperamos le haya sido de utilidad.");
}

//Ejecutar el programa:

let opcion = menu();

switch (opcion) {
  case 1:
    solicitarVeca();
    break;
  case 2:
    bajaVeca();
    break;
  case 3:
    modificarSolicitante();
    break;
  case 4:
    consultarSolicitante();
    break;
  case 5:
    salir();
    break;
  default:
    alert(
      "La opción indicada no se encuentra entre nuestras opciones brindadas."
    );
}
