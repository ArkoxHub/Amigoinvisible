<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <NuxtLink to="/" class="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div class="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <span class="text-white text-xl">🎁</span>
            </div>
            <div class="hidden sm:block">
              <span class="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                Amigo Invisible
              </span>
            </div>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            to="/regalos-amigo-invisible" 
            class="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-red-50"
          >
            🎪 Regalos
          </NuxtLink>
          <NuxtLink 
            to="/lista-de-deseos" 
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50"
          >
            📝 Wishlist
          </NuxtLink>
          <NuxtLink 
            to="/recuperacion-sorteo" 
            class="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-green-50"
          >
            🔄 Recuperación
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="toggleHamburger"
            class="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            :class="hamburgerOpen ? 'bg-gray-100' : ''"
          >
            <div class="w-6 h-6 relative">
              <span 
                class="absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out"
                :class="hamburgerOpen ? 'rotate-45 top-3' : 'top-1'"
              ></span>
              <span 
                class="absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out top-3"
                :class="hamburgerOpen ? 'opacity-0' : 'opacity-100'"
              ></span>
              <span 
                class="absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out"
                :class="hamburgerOpen ? '-rotate-45 top-3' : 'top-5'"
              ></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div 
        class="md:hidden transition-all duration-300 ease-in-out overflow-hidden"
        :class="hamburgerOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'"
      >
        <div class="py-4 space-y-2 border-t border-gray-200 mt-2">
          <NuxtLink 
            @click="toggleHamburguer"
            to="/regalos-amigo-invisible" 
            class="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium"
          >
            🎪 Regalos
          </NuxtLink>
          <NuxtLink 
            @click="toggleHamburguer"
            to="/lista-de-deseos" 
            class="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
          >
            📝 Wishlist
          </NuxtLink>
          <NuxtLink 
            @click="toggleHamburguer"
            to="/recuperacion-sorteo" 
            class="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors font-medium"
          >
            🔄 Recuperación
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const emit = defineEmits(['toggleContainerOpacity'])

const hamburgerOpen = ref(false)

onMounted(() => {
  if (process.client) {
    window.addEventListener("resize", handleWidthChange)
    window.addEventListener("click", toggleNavClickOutside)
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener("resize", handleWidthChange)
    window.removeEventListener("click", toggleNavClickOutside)
  }
})

function toggleHamburger() {
  hamburgerOpen.value = !hamburgerOpen.value
  emit('toggleContainerOpacity', hamburgerOpen.value)
}

function handleWidthChange() {
  if (process.client && window.innerWidth >= 768) {
    hamburgerOpen.value = false
    emit('toggleContainerOpacity', hamburgerOpen.value)
  }
}

function toggleHamburguer() {
  hamburgerOpen.value = !hamburgerOpen.value
  emit('toggleContainerOpacity', hamburgerOpen.value)
}

function toggleNavClickOutside(event) {
  const nav = document.querySelector('nav')
  if (nav && !nav.contains(event.target)) {
    hamburgerOpen.value = false
    emit('toggleContainerOpacity', hamburgerOpen.value)
  }
}
</script>
