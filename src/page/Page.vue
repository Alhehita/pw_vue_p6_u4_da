<template>
    <div id="app">
        <button @click="componente = 'Eliminar'">Mostrar Eliminar</button>
      <button @click="componente = 'Insertar'">Mostrar Insertar</button>
      <button @click="componente = 'ConsultarActualizar'">Mostrar ConsultarActualizar</button>
      
          <component :is="componente" />
  
    </div>
  
  </template>
  
  <script>
  import Eliminar from "./components/Eliminar.vue";
  import Insertar from "./components/Insertar.vue";
  import ConsultarActualizar from "./components/ConsultarActualizar.vue";
  
  export default {
    name: "App",
    components: {
      Eliminar,
      ConsultarActualizar,
      Insertar,
    },
    data() {
      return {
        componente: 'Insertar'  // Componente inicial a mostrar
      };
    }
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  button{
      margin: 5px;
      padding: 5px;
  }
  </style>
  