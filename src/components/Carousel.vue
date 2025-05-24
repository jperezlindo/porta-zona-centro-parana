<template>
  <div class="relative w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-md h-[160px] sm:h-[200px] md:h-[240px]">
    <img
      :src="imagenes[actual]"
      alt="Imagen del carrusel"
      class="w-full h-full object-cover transition-all duration-500"
    />

    <!-- Flecha izquierda -->
    <button
      @click="anterior"
      class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 p-1.5 rounded-full shadow text-lg leading-none"
    >
      ‹
    </button>

    <!-- Flecha derecha -->
    <button
      @click="siguiente"
      class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 p-1.5 rounded-full shadow text-lg leading-none"
    >
      ›
    </button>

    <!-- Indicadores -->
    <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
      <span
        v-for="(img, index) in imagenes"
        :key="index"
        @click="actual = index"
        class="w-2.5 h-2.5 rounded-full cursor-pointer transition"
        :class="actual === index ? 'bg-yellow-500 scale-110' : 'bg-white border border-gray-300 hover:bg-yellow-300'"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const imagenes = [
  new URL('@/assets/carousel/imagen1.jpg', import.meta.url).href,
  new URL('@/assets/carousel/imagen2.jpg', import.meta.url).href
]

const actual = ref(0)
let intervalo = null

function siguiente() {
  actual.value = (actual.value + 1) % imagenes.length
}

function anterior() {
  actual.value = (actual.value - 1 + imagenes.length) % imagenes.length
}

onMounted(() => {
  intervalo = setInterval(() => {
    siguiente()
  }, 5000)
})

onUnmounted(() => {
  clearInterval(intervalo)
})
</script>
