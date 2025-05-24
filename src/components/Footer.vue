<template>
  <footer class="bg-[rgb(124,129,135)] text-white py-6 mt-10">
    <div class="max-w-7xl mx-auto px-4 text-center text-sm">
      <p> Dirección de Zona Centro Paraná - Ministerio de Salud Pública de Misiones | Conectando Personas y Salud con Tegnologia | JAP-Solutions&copy;{{ currentYear }} </p>
    </div>
  </footer>
</template>

<script setup>
  const currentYear = new Date().getFullYear()
</script>