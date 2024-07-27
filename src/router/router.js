//aqui se confiura la libreria del router
//aqui se declara todas las rutas del proyecto

import { createRouter, createWebHashHistory } from "vue-router";

//import consultaractualizar from '../components/ConsultarActualizar.vue'
//import eliminar from '../components/Eliminar.vue'
//import insertar from '@/components/Insertar.vue'

import consultaractualizar from "../page/ConsultarActualizarPage.vue";
import eliminar from "../page/EliminarPage.vue";
import insertar from "@/page/InsertarPage.vue";
import notFound from "@/page/NotFoundPage.vue";
import bloqueado from "@/page/BloqueadoPage.vue"

import bienvenida from "@/page/BienvenidaPage.vue";
import NotFoundPage from "@/page/NotFoundPage.vue";

const routes = [
  {
    path: "/consultaractualizar/:cedula", //esto va despues del http://localhost:8080
    name: "prueba",
    component: consultaractualizar,
  },
  {
    path: "/eliminar", //esto va despues del http://localhost:8080
    component: eliminar,
  },
  {
    path: "/insertar", //esto va despues del http://localhost:8080
    component: insertar,
  },
  {
    path: "/", //esto va despues del http://localhost:8080
    component: bienvenida,
  },
  {
    path: "/:pathMatch(.*)*",
    
    component: notFound,
    
  },
  {
    path: "/bloqueado",
    name: 'bloqueado',
    component: bloqueado,
    
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//programar guardianes

router.beforeEach((to, from, next /*palabras reservadas*/) => {

    console.log('guardianes')
    console.log( to);
    console.log(from);
    console.log(next);
  let usuario = "Dennisse";
  let resultado = false;

  const random = Math.random()*100;

  if(random>50){
    console.log('Si tiene acceso a esa página');
    next();
  } else {
    console.log('acceso bloqueado');
    next({name:'bloqueado'} );
  }
});
export default router;
