<template>
  <section class="p-6 lg:p-12 text-center">
    <h1 class="text-4xl font-bold text-[#000000] mb-9">{{ titulo }}</h1>
    <h2 class="text-2xl text-gray-800 max-w-3xl mx-auto mb-9">
      {{ cuerpo }}
    </h2>
    <p class="text-black-700 max-w-2xl mx-auto">
      {{ comentario }}
    </p>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  const titulo = ref('Bienvenido al Portal de la Zona Centro Paraná')
  const cuerpo = ref('Este portal tiene como objetivo brindar información institucional, servicios disponibles, novedades y medios de contacto para los ciudadanos.')
  const comentario = ref('Conectando Personas y Salud con Tegnologia')
</script>