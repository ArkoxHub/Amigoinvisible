<template>
  <div class="min-h-screen py-8">
    <Head>
      <Title>Amigo invisible online 🎁 Sorteo amigo invisible gratis 💗 Regalos amigo invisible ✅ Lista de deseos amigo invisible</Title>
      <Meta name="description" content="Sorteo amigo invisible online gratis. Realiza el sorteo del amigo invisible online en pocos pasos y recibe los resultados en el correo electrónico." />
    </Head>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Info Section -->
      <section v-if="showInfo" class="mb-12">
        <div class="max-w-6xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6">
            🎁 Amigo Invisible Online
          </h1>
          <h2 class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Sorteo amigo invisible online gratis. Realiza el sorteo del amigo invisible online en pocos pasos y recibe los resultados en el correo electrónico.
          </h2>
          
          <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <p class="text-2xl font-semibold text-gray-800 mb-6">✨ Pasos a seguir:</p>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="flex flex-col items-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
                <div class="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  1
                </div>
                <p class="text-gray-700 text-center font-medium">
                  Rellena los campos del formulario con los datos de los participantes
                </p>
              </div>
              
              <div class="flex flex-col items-center p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl">
                <div class="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  2
                </div>
                <p class="text-gray-700 text-center font-medium">
                  Pulsa el botón continuar y revisa que todo esté correcto
                </p>
              </div>
              
              <div class="flex flex-col items-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  3
                </div>
                <p class="text-gray-700 text-center font-medium">
                  Cada participante recibirá un correo electrónico con el resultado del sorteo
                </p>
              </div>
            </div>
          </div>

          <div class="mt-8 p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl border border-green-200">
            <h3 class="text-2xl font-semibold text-green-800 mb-2">
              🍀 ¡No olvides revisar!
            </h3>
            <p class="text-green-700">
              Consulta la sección de 
              <NuxtLink to="/regalos-amigo-invisible" 
                        class="font-semibold text-green-600 hover:text-green-800 underline decoration-2 underline-offset-2 transition-colors">
                regalos amigo invisible
              </NuxtLink>
              para encontrar ideas perfectas
            </p>
          </div>
        </div>
      </section>

      <!-- Draw Component -->
      <section class="draw-container">
        <Draw @toggleInfo="toggleInfo" />
      </section>
    </div>
  </div>
</template>

<script setup>
const showInfo = ref(true)

function toggleInfo() {
  showInfo.value = !showInfo.value
}
</script>
