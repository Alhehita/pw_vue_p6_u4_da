<template>
  <section>
    <h2>Estudiante</h2>
    <div class="container">
      <div class="datos">
        <p type="Cédula"><input v-model="this.cedula" type="text" /></p>
      </div>
      <div class="botones">
        <button @click="eliminar">Eliminar</button>
      </div>
    </div>
  </section>
</template>

<script>
import { eliminarFachada } from "@/clients/ClienteEstudiante.js";
export default {
  data() {
    return {
      cedula: null,
    };
  },
  methods: {
    async eliminar() {
      const data = await eliminarFachada(this.cedula);
      console.log("eliminado");
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
  padding: 5px 10px; /* Ajusta el padding según lo necesites */
  height: 30px;
  width: 90px;
  border: 1px solid #ffd6ff;
  border-radius: 3px;
  background: #b8c0ff;
  align-items: center; /* Centra verticalmente */
  justify-content: center; /* Centra horizontalmente */
  text-align: center; /* Asegura que el texto esté centrado */
}
</style>
