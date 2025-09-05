<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
    <!-- Navigation -->
    <AppHeader @toggleContainerOpacity="toggleOpacity" />
    
    <!-- Main Content -->
    <main class="relative pt-20">
      <div 
        :class="isHamburgerActive === false ? 'container opacity-100' : 'container opacity-30'" 
        class="transition-opacity duration-300"
      >
        <slot />
      </div>
    </main>
    
    <!-- Footer -->
    <AppFooter />
    
    <!-- Cookies Popup -->
    <CookiesPopup />
  </div>
</template>

<script setup>
const isHamburgerActive = ref(false)

function toggleOpacity(value) {
  isHamburgerActive.value = value
}
</script>

<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  min-height: 85vh;
  position: relative;
  z-index: 10;
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

@media only screen and (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  h1 {
    font-size: 1.25rem;
  }
}
</style>

<style>
/* Global input styles for better text visibility */
input[type="text"],
input[type="email"],
input[type="number"],
input[type="date"],
input[type="password"],
input[type="search"],
input[type="url"],
input[type="tel"],
select,
textarea {
  color: #111827 !important;
  background-color: #ffffff !important;
}

input[type="text"]::placeholder,
input[type="email"]::placeholder,
input[type="number"]::placeholder,
input[type="password"]::placeholder,
input[type="search"]::placeholder,
input[type="url"]::placeholder,
input[type="tel"]::placeholder,
textarea::placeholder {
  color: #6b7280 !important;
}

/* Consistent width for all main content containers */
.main-content-width {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .main-content-width {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .main-content-width {
    padding: 0 2rem;
  }
}
</style>
