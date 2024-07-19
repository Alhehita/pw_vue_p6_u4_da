<template>
  <section>
    <h2>Estudiante</h2>
    <div class="container">
      <div class="datos">
        <p type="Cédula"><input type="text" /></p>
        
      </div>
      <div class="botones">
        <button>Eliminar</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
p:before{
    content: attr(type);
    display: block;
    margin: 3px 2px;
    font-size:  16px;

}

button{
    margin: 5px;
    padding: 5px;
}
</style>
