<template>
  <footer class="bg-gradient-to-r from-slate-100 via-blue-100 to-indigo-100 text-gray-800 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Logo and Description -->
        <div class="flex flex-col items-center md:items-start">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <span class="text-white text-xl">🎁</span>
            </div>
            <NuxtLink to="/" class="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              Amigo Invisible
            </NuxtLink>
          </div>
          <p class="text-gray-600 text-center md:text-left max-w-sm">
            La plataforma más fácil y divertida para organizar tu intercambio de regalos online de forma gratuita.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-col items-center md:items-start">
          <h3 class="text-lg font-semibold mb-4 text-gray-800">Enlaces Rápidos</h3>
          <div class="space-y-2">
            <NuxtLink 
              to="/regalos-amigo-invisible" 
              class="block text-gray-600 hover:text-red-500 transition-colors duration-200 font-medium"
            >
              🎪 Ideas de Regalos
            </NuxtLink>
            <NuxtLink 
              to="/lista-de-deseos" 
              class="block text-gray-600 hover:text-blue-500 transition-colors duration-200 font-medium"
            >
              📝 Lista de Deseos
            </NuxtLink>
            <NuxtLink 
              to="/recuperacion-sorteo" 
              class="block text-gray-600 hover:text-green-500 transition-colors duration-200 font-medium"
            >
              🔄 Recuperar Sorteo
            </NuxtLink>
            <NuxtLink 
              to="/amigo-invisible" 
              class="block text-gray-600 hover:text-purple-500 transition-colors duration-200 font-medium"
            >
              ℹ️ Más Información
            </NuxtLink>
          </div>
        </div>

        <!-- Legal and Support -->
        <div class="flex flex-col items-center md:items-start">
          <h3 class="text-lg font-semibold mb-4 text-gray-800">Legal & Soporte</h3>
          <div class="space-y-2 mb-4">
            <NuxtLink 
              to="/politica-cookies" 
              class="block text-gray-600 hover:text-yellow-600 transition-colors duration-200 font-medium"
            >
              🍪 Política de Cookies
            </NuxtLink>
            <NuxtLink 
              to="/politica-privacidad" 
              class="block text-gray-600 hover:text-yellow-600 transition-colors duration-200 font-medium"
            >
              🔒 Política de Privacidad
            </NuxtLink>
          </div>
          
          <!-- PayPal Donation -->
          <div class="mt-4">
            <p class="text-sm text-gray-500 mb-2">¿Te ha gustado? ¡Apóyanos!</p>
            <form 
              id="paypalDonation" 
              action="https://www.paypal.com/donate" 
              method="post" 
              target="_top"
              class="inline-block"
            >
              <input type="hidden" name="hosted_button_id" value="VH8WQZ9AMYK48">
              <button 
                type="submit"
                class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <span>💝</span>
                <span>Donar</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div class="text-gray-500 text-sm mb-4 md:mb-0">
          <p>© {{ currentYear }} Adrià Gual. Todos los derechos reservados.</p>
        </div>
        <div class="flex items-center space-x-4">
          <div class="text-xs text-gray-400 text-center">
            <p>Hecho con ❤️ para hacer más fácil el intercambio de regalos</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Function to return the current year
const currentYear = computed(() => {
  return new Date().getFullYear()
})
</script>
