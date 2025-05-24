<template>
  <section class="p-6 lg:p-12">
    <h1 class="text-2xl font-bold text-[#003366] mb-6">Nuestra Institución</h1>
    <div class="grid md:grid-cols-2 gap-6">
      <Card 
        v-for="(item, index) in response"
        :key="index"
        :titulo="item?.titulo"
        :descripcion="item?.descripcion"
      />
    </div>
  </section>
</template>

<script setup>
  import Card from '@/components/Card.vue'

  const response = [
    {
      titulo: '¿Quiénes somos?',
      descripcion: 'La Dirección de Zona Centro Paraná forma parte del Ministerio de Salud Pública de la Provincia de Misiones, trabajando en la mejora de la calidad de vida de nuestra población.'
    },
    {
      titulo: 'Misión y Visión',
      descripcion: 'Promover un sistema de salud accesible, inclusivo y humano, con enfoque preventivo y comunitario en el centro de la provincia.'
    },
    {
      titulo:'Personal',
      descripcion: ` - Director: Bioing. Araujo Hugo.
        - A.P.S: Dr. Perez,
        - Inumnizaciones: Lic. Fran Maria
      `
    }
  ]
</script>
