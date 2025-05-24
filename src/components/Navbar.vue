<template>
    <header class="fixed top-0 left-0 w-full z-50 shadow-md border-b border-yellow-200"
        style="background: linear-gradient(90deg, rgba(255,181,14,1) 38%, rgba(255,225,49,1) 100%)">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <!-- Logo + Escudo -->
            <router-link to="/" class="flex items-center space-x-3">
                <img src="@/assets/logo-zcp.png" alt="Escudo Misiones" class="w-80 h-10" />
            </router-link>

            <!-- Botón Hamburguesa -->
            <button class="md:hidden text-white focus:outline-none" @click="toggleMenu" aria-label="Toggle menu">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16" />
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <!-- Links -->
            <ul class="md:flex font-medium"
                :class="{ 'hidden': !isOpen, 'absolute top-16 left-0 right-0 bg-white md:bg-transparent md:static md:flex md:space-x-6': true }">
                <li v-for="(item, index) in links" :key="index">
                    <router-link :to="item.to"
                        class="block py-2 px-4 text-gray-800 hover:text-blue-700 md:text-white md:hover:text-blue-800 transition-colors"
                        @click="closeMenu">
                        {{ item.label }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
    isOpen.value = !isOpen.value
}

function closeMenu() {
    isOpen.value = false
}

const links = [
    { label: 'Inicio', to: '/' },
    { label: 'Institución', to: '/institucion' },
    { label: 'Servicios', to: '/servicios' },
    { label: 'Noticias', to: '/noticias' },
    { label: 'Contacto', to: '/contacto' }
]
</script>

<style scoped>
ul.absolute {
    transition: all 0.3s ease-in-out;
}
</style>
