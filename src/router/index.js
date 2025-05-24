import { createRouter, createWebHistory } from 'vue-router'

// Vistas Publicas
import AppLayout from '@/layouts/AppLayout.vue'
import Home from '@/views/Home.vue'
import Institucion from '@/views/Institucion.vue'
import Servicios from '@/views/Servicios.vue'
import Noticias from '@/views/Noticias.vue'
import Contacto from '@/views/Contacto.vue'

// Vistas ADMIN
import DashboardLayout from '@/admin/DashboardLayout.vue'
import EditInicio from '@/admin/EditInicio.vue'
import EditInstitucion from '@/admin/EditInstitucion.vue'
import EditServicios from '@/admin/EditServicios.vue'
import EditNoticias from '@/admin/EditNoticias.vue'
import EditContacto from '@/admin/EditContacto.vue'

const routes = [
  // Rutas Publicas
  {
    path: '/',
    component: AppLayout,
    children: [
      { path: '', component: Home },
      { path: 'institucion', component: Institucion },
      { path: 'servicios', component: Servicios },
      { path: 'noticias', component: Noticias },
      { path: 'contacto', component: Contacto }
    ]
  },
  // Rutas Privadas
  {
    path: '/admin',
    component: DashboardLayout,
    children: [
      { path: 'inicio', component: EditInicio },
      { path: 'institucion', component: EditInstitucion },
      { path: 'servicios', component: EditServicios },
      { path: 'noticias', component: EditNoticias },
      { path: 'contacto', component: EditContacto }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
