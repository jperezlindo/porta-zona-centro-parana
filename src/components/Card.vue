<template>
    <div class="bg-white rounded-2xl shadow p-6">
        <h2 class="text-lg font-semibold text-[#003366] mb-2"> {{ titulo }}</h2>
        <p class="text-gray-700">
            {{ descripcion}}
        </p>
    </div>
</template>

<script setup>
    defineProps({
        titulo: String,
        descripcion: String,
    })
</script>