<template>
  <div class="min-h-screen py-8">
    <Head>
      <Title>Política de privacidad</Title>
      <Meta name="description" content="Política de privacidad de nuestro sitio web de amigo invisible. Información sobre el tratamiento de datos personales." />
    </Head>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          🔒 Política de Privacidad
        </h1>
      </div>
      
      <!-- Content -->
      <div class="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
        <div class="space-y-8">
          <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Icon name="heroicons:information-circle" class="mr-3 text-blue-600" />
              Información sobre el tratamiento de datos
            </h2>
            <p class="text-gray-700 leading-relaxed">
              En esta aplicación de amigo invisible, respetamos tu privacidad y nos comprometemos a proteger 
              tus datos personales de acuerdo con la normativa vigente de protección de datos.
            </p>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Icon name="heroicons:clipboard-document-list" class="mr-3 text-green-600" />
              Datos que recopilamos
            </h2>
            <div class="space-y-3">
              <div class="flex items-center p-3 bg-green-50 rounded-xl border border-green-200">
                <Icon name="heroicons:user" class="mr-3 text-green-600" />
                <span class="text-green-700 font-medium">Nombres de los participantes</span>
              </div>
              <div class="flex items-center p-3 bg-blue-50 rounded-xl border border-blue-200">
                <Icon name="heroicons:envelope" class="mr-3 text-blue-600" />
                <span class="text-blue-700 font-medium">Direcciones de correo electrónico</span>
              </div>
              <div class="flex items-center p-3 bg-purple-50 rounded-xl border border-purple-200">
                <Icon name="heroicons:calendar" class="mr-3 text-purple-600" />
                <span class="text-purple-700 font-medium">Información del sorteo (título, fecha, comentarios)</span>
              </div>
            </div>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Icon name="heroicons:cpu-chip" class="mr-3 text-orange-600" />
              Uso de los datos
            </h2>
            <p class="text-gray-700 mb-4">Los datos se utilizan únicamente para:</p>
            <div class="space-y-3">
              <div class="flex items-center p-3 bg-orange-50 rounded-xl border border-orange-200">
                <Icon name="heroicons:gift" class="mr-3 text-orange-600" />
                <span class="text-orange-700 font-medium">Realizar el sorteo del amigo invisible</span>
              </div>
              <div class="flex items-center p-3 bg-yellow-50 rounded-xl border border-yellow-200">
                <Icon name="heroicons:paper-airplane" class="mr-3 text-yellow-600" />
                <span class="text-yellow-700 font-medium">Enviar los resultados por correo electrónico</span>
              </div>
              <div class="flex items-center p-3 bg-indigo-50 rounded-xl border border-indigo-200">
                <Icon name="heroicons:arrow-path" class="mr-3 text-indigo-600" />
                <span class="text-indigo-700 font-medium">Permitir la recuperación de sorteos</span>
              </div>
            </div>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Icon name="heroicons:shield-check" class="mr-3 text-red-600" />
              Seguridad
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Implementamos medidas de seguridad apropiadas para proteger tus datos contra acceso no autorizado, 
              alteración, divulgación o destrucción. Utilizamos encriptación y otras tecnologías de seguridad 
              para mantener la confidencialidad de tu información.
            </p>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Icon name="heroicons:chat-bubble-left-right" class="mr-3 text-teal-600" />
              Contacto
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Si tienes preguntas sobre esta política de privacidad o deseas ejercer tus derechos de protección de datos, 
              puedes contactarnos a través de nuestros canales oficiales. Responderemos a tu consulta en el menor tiempo posible.
            </p>
          </section>
        </div>
        
        <!-- Back Button -->
        <div class="text-center mt-8 pt-8 border-t border-gray-200">
          <NuxtLink 
            to="/" 
            class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
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
