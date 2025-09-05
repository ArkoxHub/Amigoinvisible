<template>
  <div class="min-h-screen py-8">
    <Head>
      <Title>Política de cookies</Title>
      <Meta name="description" content="Información sobre el uso de cookies en nuestro sitio web de amigo invisible." />
    </Head>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-6">
          🍪 Política de Cookies
        </h1>
      </div>
      
      <!-- Content -->
      <div class="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
        <div class="space-y-8">
          <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Icon name="heroicons:question-mark-circle" class="mr-3 text-yellow-600" />
              ¿Qué son las cookies?
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. 
              Nos ayudan a mejorar tu experiencia de usuario y proporcionar funcionalidades personalizadas.
            </p>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Icon name="heroicons:squares-2x2" class="mr-3 text-blue-600" />
              Tipos de cookies que utilizamos
            </h2>
            <div class="space-y-4">
              <div class="p-4 bg-green-50 rounded-xl border border-green-200">
                <h3 class="font-semibold text-green-800 mb-2">🔧 Cookies esenciales</h3>
                <p class="text-green-700">Necesarias para el funcionamiento básico del sitio web</p>
              </div>
              <div class="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <h3 class="font-semibold text-blue-800 mb-2">⚙️ Cookies de preferencias</h3>
                <p class="text-blue-700">Recuerdan tus configuraciones y preferencias personales</p>
              </div>
              <div class="p-4 bg-purple-50 rounded-xl border border-purple-200">
                <h3 class="font-semibold text-purple-800 mb-2">📊 Cookies analíticas</h3>
                <p class="text-purple-700">Nos ayudan a entender cómo usas el sitio para mejorarlo</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Icon name="heroicons:cog-6-tooth" class="mr-3 text-green-600" />
              Gestión de cookies
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Puedes controlar y gestionar las cookies en la configuración de tu navegador. 
              Ten en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio.
            </p>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Icon name="heroicons:check-circle" class="mr-3 text-purple-600" />
              Consentimiento
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Al utilizar nuestro sitio web, consientes el uso de cookies de acuerdo con esta política. 
              Puedes retirar tu consentimiento en cualquier momento a través de la configuración de tu navegador.
            </p>
          </section>
        </div>
        
        <!-- Back Button -->
        <div class="text-center mt-8 pt-8 border-t border-gray-200">
          <NuxtLink 
            to="/" 
            class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <Icon name="heroicons:home" />
            Volver al inicio
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  if (import.meta.client) {
    window.scrollTo(0, 0)
  }
})
</script>
