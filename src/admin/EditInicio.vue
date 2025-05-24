<template>
  <section>
    <h1 class="text-2xl font-bold text-[#003366] mb-4">Editar Inicio</h1>
    <textarea v-model="contenido" rows="6" class="w-full border rounded p-2"></textarea>
    <button class="mt-4 bg-[#003366] text-white px-4 py-2 rounded hover:bg-blue-900">Guardar</button>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const contenido = ref('Contenido de la sección Inicio...')
</script>