<template>
  <section class="p-6 lg:p-12">
    <h1 class="text-2xl font-bold text-[#003366] mb-6">Contacto</h1>
    <form class="max-w-xl space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Nombre</label>
        <input type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Correo electrónico</label>
        <input type="email" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Mensaje</label>
        <textarea rows="4" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
      </div>
      <button type="submit" class="bg-[#003366] text-white py-2 px-4 rounded-md hover:bg-blue-800 transition">Enviar</button>
    </form>
  </section>
</template>