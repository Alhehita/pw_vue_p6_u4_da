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
