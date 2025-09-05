<template>
  <div class="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
    <!-- Product Category Badge -->
    <div class="mb-4">
      <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border border-purple-200">
        {{ product.category }}
      </span>
    </div>

    <!-- Product Title -->
    <h3 class="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
      {{ product.title }}
    </h3>

    <!-- Product Description -->
    <p class="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
      {{ product.description }}
    </p>

    <!-- Action Button -->
    <div class="mt-auto">
      <a 
        :href="product.url" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-2xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg group-hover:shadow-xl"
      >
        <Icon name="heroicons:shopping-cart" class="mr-2" />
        <span>Ver en Amazon</span>
        <Icon name="heroicons:arrow-top-right-on-square" class="ml-2 w-4 h-4" />
      </a>
    </div>

    <!-- Trust Badge -->
    <div class="mt-4 flex items-center justify-center text-xs text-gray-500">
      <Icon name="heroicons:shield-check" class="mr-1 w-4 h-4 text-green-500" />
      <span>Envío rápido y seguro</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
