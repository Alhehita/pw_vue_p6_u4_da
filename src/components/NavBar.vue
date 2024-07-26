<template>
    <div>
        <router-link to="/">Bienvenida</router-link>
        <router-link to="/consultaractualizar/vacio">Estudiante Actualizar y Consultar</router-link>
        <router-link to="/insertar">Estudiante Ingresar</router-link>
        <router-link to="/eliminar">Estudiante Eliminar</router-link>

    </div>
  
</template>

<script>
export default {
    

}
</script>

<style scoped>
    
div{
    padding: 0px 30px;
    margin-bottom: 20px;
}

div a {
    color: #240046;
    margin: 0px 10px;
    border: 1px solid #e0aaff;
    padding: 10px;
    background: #c77dff ;
    border-radius: 10px;
    pointer-events: stroke;
}
</style>