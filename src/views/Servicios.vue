<template>
  <section class="p-6 lg:p-12">
    <h1 class="text-2xl font-bold text-[#003366] mb-6">Servicios</h1>

    <!-- Botones de selección -->
    <div class="flex flex-wrap gap-4 mb-8">
      <button
        v-for="(categoria, index) in categorias"
        :key="index"
        @click="categoriaSeleccionada = categoria.tipo"
        :class="[
          'px-4 py-2 rounded-full font-medium border transition-all',
          categoriaSeleccionada === categoria.tipo
            ? 'bg-yellow-400 text-white border-yellow-500'
            : 'bg-white text-[#003366] border-gray-300 hover:bg-yellow-100'
        ]"
      >
        {{ categoria.label }}
      </button>
    </div>

    <!-- Tarjetas dinámicas -->
    <div class="grid md:grid-cols-3 gap-6">
      <Card 
        v-for="(item, index) in serviciosFiltrados"
        :key="index"
        :titulo="item?.titulo"
        :descripcion="item?.descripcion"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import Card from '@/components/Card.vue'

// Categorías de servicios
const categorias = [
  { tipo: 'policlinico', label: 'Policlínico' },
  { tipo: 'hospitales', label: 'Hospitales Nivel II' },
  { tipo: 'areas', label: 'Áreas Programáticas' }
]

// Estado seleccionado
const categoriaSeleccionada = ref('policlinico')

// Todos los servicios clasificados
const todosLosServicios = [
  {
    tipo: 'policlinico',
    titulo: 'Consultas Médicas',
    descripcion: 'Atención clínica general, especialidades médicas y controles de salud.'
  },
  {
    tipo: 'policlinico',
    titulo: 'Vacunación',
    descripcion: 'Campañas de vacunación en toda la región, calendario nacional actualizado.'
  },
  {
    tipo: 'policlinico',
    titulo: 'Turnos Online',
    descripcion: 'Gestión de turnos por especialidad, profesional y disponibilidad.'
  },
  {
    tipo: 'hospitales',
    titulo: 'Hospital Nivel II - Oberá',
    descripcion: 'Atención de urgencias, cirugías y especialidades médicas con internación.'
  },
  {
    tipo: 'hospitales',
    titulo: 'Hospital Nivel II - Alem',
    descripcion: 'Diagnóstico por imágenes, laboratorio y atención de mediana complejidad.'
  },
  {
    tipo: 'areas',
    titulo: 'Área Programática 1',
    descripcion: 'Cobertura de salud en zona urbana y rural, coordinación de policlínicos.'
  },
  {
    tipo: 'areas',
    titulo: 'Área Programática 2',
    descripcion: 'Supervisión de campañas, programas sanitarios y logística zonal.'
  }
]

// Filtro dinámico por categoría
const serviciosFiltrados = computed(() =>
  todosLosServicios.filter(s => s.tipo === categoriaSeleccionada.value)
)
</script>
