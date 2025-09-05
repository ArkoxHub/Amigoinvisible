<template>
  <Transition name="slide-up">
    <div v-if="showCookiesContainer" class="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex-1 text-center sm:text-left">
            <div class="flex items-center justify-center sm:justify-start mb-2">
              <span class="text-2xl mr-2">🍪</span>
              <h3 class="text-lg font-semibold text-gray-800">Política de Cookies</h3>
            </div>
            <p class="text-gray-600 text-sm">
              Este sitio web utiliza cookies para garantizar la mejor experiencia. 
              Al continuar navegando, aceptas nuestro uso de cookies.
            </p>
          </div>
          
          <div class="flex space-x-3">
            <button 
              @click="declineCookies"
              class="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              Rechazar
            </button>
            <button 
              @click="acceptCookies"
              class="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md font-medium"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const showCookiesContainer = ref(false)

onMounted(() => {
  if (import.meta.client) {
    // Check if cookies have been accepted or declined
    if (localStorage.getItem('cookies') == null) {
      showCookiesContainer.value = true
    }

    if (localStorage.getItem('cookies') == 'declined') {
      declineCookies()
    }
  }
})

// Save Local Storage for cookies
function acceptCookies() {
  if (import.meta.client) {
    localStorage.setItem('cookies', 'accepted')
    showCookiesContainer.value = false
    if (typeof window !== 'undefined' && window.gtag) {
      window['ga-disable-G-X0W02J8ZBJ'] = false
      window.gtag('consent', 'update', {
        'ad_storage': 'granted'
      })
    }
  }
}

function declineCookies() {
  if (import.meta.client) {
    localStorage.setItem('cookies', 'declined')
    showCookiesContainer.value = false
    // Disable Google Analytics
    if (typeof window !== 'undefined') {
      window['ga-disable-G-X0W02J8ZBJ'] = true

      // Disable Google Tag Manager
      window['dataLayer'] = []
      if (window.gtag) {
        window.gtag('consent', 'default', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied'
        })
      }
    }
  }
}
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
