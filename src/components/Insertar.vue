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
        <button @click="guardar">Guardar</button>
      </div>
    </div>
  </section>
</template>

<script>
import { guardarFachada } from '@/clients/ClienteEstudiante';
export default {
  data() {
    return {
      nombre: "",
      cedula: "",
      genero: "",
      apellido: "",
      fechaNaciomiento: "",
    };
  },
  methods: {
    async guardar() {
      const bodyEstudiante = {
        cedula :this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNaciomiento: this.fechaNaciomiento,
        genero: this.genero,
      };

      const data = await guardarFachada(bodyEstudiante);
      console.log(data);
    },
  },
};
</script>

<style scoped>
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
