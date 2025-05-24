<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <Navbar />
    <main class="flex-grow pt-20">
      <router-view />
    </main>
    <Footer />
    <!-- WhatsApp -->
    <WhatsApp />
  </div>
</template>

<script setup>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
  import WhatsApp from '@/components/WhatsApp.vue';
</script>