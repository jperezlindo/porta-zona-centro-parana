<template>
  <footer class="bg-[rgb(124,129,135)] text-white py-6 mt-10">
    <div class="max-w-7xl mx-auto px-4 text-center text-sm">
      <p> &copy;{{ currentYear }} | Dirección de Zona Centro Paraná - Ministerio de Salud Pública de Misiones </p>
    </div>
  </footer>
</template>

<script setup>
  const currentYear = new Date().getFullYear()
</script>