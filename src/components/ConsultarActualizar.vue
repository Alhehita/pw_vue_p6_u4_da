<template>
  <section>
    <h2>Estudiante</h2>
    <div class="container">
      <div class="datos">
        <p type="Cédula"><input v-model="this.cedula" type="text" /></p>
        <p type="Nombre"><input v-model="this.nombre" type="text" /></p>
        <p type="Apellido"><input v-model="this.apellido" type="text" /></p>
        <p type="Fecha de Nacimiento"><input v-model="this.fechaNaciomiento" type="datetime-local" /></p>
        <p type="Género"><input v-model="this.genero" type="text" /></p>
      </div>
      <div class="botones">
        <button @click="consultar">Consultar</button>
        <button @click="actualizar">Actualizar</button>
      </div>
    </div>
  </section>
</template>

<script>
import {
  obtenerPorCedulaAxiosFachada,
  actualizarFachada,
} from "../clients/ClienteEstudiante.js"; //se hace referencia al archivo cliente
export default {
  data() {
    return {
      nombre:null,
      cedula: null,
      genero: null,
      apellido:null,
      fechaNaciomiento: null,
    };
  },
  methods: {
    async consultar() {
      console.log(this.cedula);
      const data = await obtenerPorCedulaAxiosFachada(this.cedula);
      console.log(data);
      console.log(data.nombre);
      console.log(data.apellido);
      console.log(data.genero);

    },
    async actualizar() {

      const bodyEstudiante ={
        //se construye el objeto que esta vinculado a los inputs 
        "nombre": this.nombre,
        "apellido": this.apellido,
        "fechaNaciomiento": this.fechaNaciomiento,
        "genero": this.genero,
      }
      const data = await  actualizarFachada(this.cedula, bodyEstudiante);

      console.log(data);
    },
  },
};
</script>

<style>
p:before {
  content: attr(type);
  display: block;
  margin: 3px 2px;
  font-size: 16px;
}

button {
  margin: 5px;
  padding: 5px;
}
</style>
