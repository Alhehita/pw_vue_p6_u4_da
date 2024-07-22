import axios from "axios"; // para importar las funcionalidades de axios

//metodos de consumo de la API

const obtenerPorCedula = async (cedula) => {
  const data = await fetch(
    `http://localhost:8080/API/v1.0/Matricula/estudiantes/cedula/${cedula}`
  ).then((r) => r.json());

  console.log(data);

  return data;
};

//ya tiene implicito el await por eso se debe poner como async
const obtenerPorCedulaAxios = async (cedula) => {
  const data = axios
    .get(
      `http://localhost:8080/API/v1.0/Matricula/estudiantes/cedula/${cedula}`
    )
    .then((r) => r.data);
  console.log(data);

  return data;
};

const guardar = async (estudianteBody) => {
  const data = axios
    .post(
      `http://localhost:8080/API/v1.0/Matricula/estudiantes`,
      estudianteBody
    )
    .then((r) => r.data);
  console.log(data);
  return data;
};

//especificar de manera como esta definida la capacidad
const actualizar = async (cedula, estudianteBody) => {
  const data = axios
    .put(
      `http://localhost:8080/API/v1.0/Matricula/estudiantes/cedula/${cedula}`,
      estudianteBody
    )
    .then((r) => r.data);

  console.log(data);

  return data;
};

const actualizarParcial = async (cedula, estudianteBody) => {
  const data = axios
    .patch(
      `http://localhost:8080/API/v1.0/Matricula/estudiantes/cedula/${cedula}`,
      estudianteBody
    )
    .then((r) => r.data);

  console.log(data);

  return data;
};

const eliminar = async (cedula) => {
  const data = axios
    .delete(
      `http://localhost:8080/API/v1.0/Matricula/estudiantes/cedula/${cedula}`
    )
    .then((r) => r.data);
  console.log(data);
  return data;
};

////////////////////////////////////////////////////////////////////////
//n se debe exponer directamente los métodos que tiene la lógica////////
//metodos de fachada

//Aqui si se debe poner el await
export const obtenerPorCedulaAxiosFachada = async (cedula) => {
  return await obtenerPorCedulaAxios(cedula);
};

export const guardarFachada = async (estudianteBody) => {
  return await guardar(estudianteBody);
};

//especificar de manera como esta definida la capacidad
export const actualizarFachada = async (cedula, estudianteBody) => {
  return await actualizar(cedula, estudianteBody);
};

export const actualizarParcialFachada = async (cedula, estudianteBody) => {
  return await actualizarParcial(cedula, estudianteBody);
};

export const eliminarFachada = async (cedula) => {
  return await eliminar(cedula);
};


