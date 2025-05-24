<template>
    <div class="bg-white rounded-2xl shadow p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <h2 class="text-lg font-semibold text-[#003366] mb-2"> {{ titulo }}</h2>
        <p class="whitespace-pre-line text-gray-700">
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