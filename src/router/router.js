//aqui se confiura la libreria del router
//aqui se declara todas las rutas del proyecto

import {createRouter, createWebHashHistory} from 'vue-router'

//import consultaractualizar from '../components/ConsultarActualizar.vue'
//import eliminar from '../components/Eliminar.vue'
//import insertar from '@/components/Insertar.vue'

import consultaractualizar from '../page/ConsultarActualizarPage.vue'
import eliminar from '../page/EliminarPage.vue'
import insertar from '@/page/InsertarPage.vue'
import notFound from '@/page/NotFoundPage.vue'

import bienvenida from '@/page/BienvenidaPage.vue'

const routes = [
    {
        path:'/consultaractualizar/:cedula', //esto va despues del http://localhost:8080
        component:consultaractualizar
    },
    {
        path:'/eliminar', //esto va despues del http://localhost:8080
        component:eliminar,
    },
    {
        path:'/insertar', //esto va despues del http://localhost:8080
        component:insertar,
    },
    {
        path:'/', //esto va despues del http://localhost:8080
        component:bienvenida,
    },
    {
        path:'/:pathMatch(.*)*',
        component:notFound
    }
]

const router = createRouter({
    history: createWebHashHistory(), routes
})

export default router

