import { Persona } from './persona';
import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

const primeraResidenciaLorena = new Direccion(
  "Calle Federico Garcia Lorca",
  10,
  3,
  "C",
  30880,
  "Aguilas",
  "Murcia"
)

const segundaResidenciaLorena = new Direccion(
  "Calle Calvario",
  90,
  3,
  "B",
  30100,
  "Murcia",
  "Murcia"
)

const mailLorena = new Mail(
  "personal",
  "Lorena199412@gmail.com"
)

const telefonoFijoLorena = new Telefono(
  "fijo",
  968666781
)

const telefonoMovilLorena = new Telefono(
  "movil",
  688909012
)

const datosLorena = new Persona(
  'Lorena',
  'Pedroche Martinez',
  29,
  '23998449X',
  new Date(1994, 8, 12),
  'marron',
  'mujer',
  [primeraResidenciaLorena, segundaResidenciaLorena],
  [mailLorena],
  [telefonoFijoLorena, telefonoMovilLorena],
  "Vive en casa de sus padres"
);

const primeraResidenciaMiguel = new Direccion(
  "Calle Tejera",
  17,
  false,
  false,
  12400,
  "Hellin",
  "Albacete"
)

const segundaResidenciaMiguel = new Direccion(
  "Calle Lorqui",
  10,
  5,
  "A",
  20013,
  "Albacete",
  "Albacete"
)

const mailPersonalMiguel = new Mail(
  "personal",
  "MiguelAlba@hotmail.com"
)

const mailTrabajoMiguel = new Mail(
  "Trabajo",
  "Miguel.Perez@everys.com"
)

const telefonoFijoMiguel= new Telefono(
  "fijo",
  967302592
)

const telefonoMovilMiguelPersonal = new Telefono(
  "movil",
  612344455
)

const telefonoMovilMiguelTrabajo = new Telefono(
  "movil",
  621252730
)



const datosMiguel = new Persona(
  'Miguel',
  'Martinez Perez',
  25,
  '55666907C',
  new Date(1998, 1, 2),
  'azul',
  'hombre',
  [primeraResidenciaMiguel, segundaResidenciaMiguel],
  [mailPersonalMiguel, mailTrabajoMiguel],
  [telefonoFijoMiguel, telefonoMovilMiguelPersonal, telefonoMovilMiguelTrabajo],
  "Ha pedido el traslado a la capital"
);

const primeraResidenciaRaul = new Direccion(
  "Calle Mayor",
  19,
  false,
  false,
  30008,
  "Murcia",
  "Murcia"
)

const segundaResidenciaRaul = new Direccion(
  "Calle Pontevedra",
  10,
  5,
  "F",
  28001,
  "Madrid",
  "Madrid"
)

const mailPersonalRaul = new Mail(
  "personal",
  "RaulPontevedra@gmail.com"
)

const mailTrabajoRaul = new Mail(
  "trabajo",
  "Raul.Gonzalez@mercadona.es"
)

const telefonoFijoRaul = new Telefono(
  "fijo",
  910109923
)

const telefonoMovilRaul = new Telefono(
  "movil",
  690909982
)

const datosRaul = new Persona(
  'Raul',
  'Gonzalez Morales',
  30,
  '90998823L',
  new Date(1993, 12, 28),
  'Rojo',
  'hombre',
  [primeraResidenciaRaul, segundaResidenciaRaul],
  [mailPersonalRaul, mailTrabajoRaul],
  [telefonoFijoRaul, telefonoMovilRaul],
  "La segunda residencia es de alquiler"
);

console.log("Contactos antes del cambio:");
console.log(datosLorena);
console.log(datosMiguel);
console.log(datosRaul);

const agenda: Array<Persona> = new Array(datosLorena, datosMiguel, datosRaul);

const dniABuscar: string = "90998823L";

const personaAEditar: Persona = agenda.find(persona => persona.dni === dniABuscar) as Persona;

const nuevaDireccion = new Direccion(
  "Calle Barcelona",
  3,
  9,
  "J",
  30201,
  "Cartagena",
  "Murcia"
)

const nuevoMail = new Mail(
  "trabajo",
  "infosecretaria@mercadona.es"
)

const nuevoTelefono = new Telefono(
  "fijo",
  900908762
)

personaAEditar.agregarNuevaDireccion(nuevaDireccion);
personaAEditar.agregarNuevoMail(nuevoMail);
personaAEditar.agregarNuevoTelefono(nuevoTelefono);

console.log("Contactos después del cambio:");
console.log(datosLorena);
console.log(datosMiguel);
console.log(datosRaul);
