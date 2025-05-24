<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-[#003366] text-white flex-shrink-0">
      <div class="p-6 font-bold text-xl border-b border-blue-900">
        Panel Administrativo
      </div>
      <nav class="flex flex-col p-4 space-y-2 text-sm">
        <router-link
          v-for="item in menu"
          :key="item.path"
          :to="item.path"
          class="py-2 px-4 rounded hover:bg-blue-800"
          active-class="bg-blue-800"
        >
          {{ item.label }}
        </router-link>
      </nav>
    </aside>

    <!-- Vista central -->
    <main class="flex-1 p-6 overflow-y-auto">
      <router-view />
    </main>
  </div>
</template>

<script setup>
const menu = [
  { label: 'Inicio', path: '/admin/inicio' },
  { label: 'Institución', path: '/admin/institucion' },
  { label: 'Servicios', path: '/admin/servicios' },
  { label: 'Noticias', path: '/admin/noticias' },
  { label: 'Contacto', path: '/admin/contacto' }
]
</script>