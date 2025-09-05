<template>
  <div class="min-h-screen py-8">
    <Head>
      <Title>Regalos amigo invisible</Title>
      <Meta name="description" content="¿Necesitas ideas para el regalo del amigo invisible? ¡No pierdas más el tiempo! Aquí tienes algunos productos para que puedas comprarlos directamente en Amazon." />
    </Head>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
          🎪 Regalos Amigo Invisible
        </h1>
        <h2 class="text-xl md:text-2xl text-gray-600 mb-6 max-w-5xl mx-auto">
          ¿Necesitas ideas para el <span class="font-semibold text-purple-600">regalo del amigo invisible</span>? 
          ¡No pierdas más el tiempo!
        </h2>
        
        <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-5xl mx-auto">
          <p class="text-lg text-gray-700 leading-relaxed">
            Aquí tienes algunos productos cuidadosamente seleccionados para que puedas comprarlos 
            directamente en Amazon con todos sus beneficios y al mejor precio.
          </p>
        </div>
      </div>

      <!-- Categories Section -->
      <section class="mb-8">
        <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <Icon name="heroicons:funnel" class="mr-2 text-purple-600" />
            Filtrar por categoría
          </h3>
          <BaseSelect 
            label="Selecciona la categoría que más te interese" 
            :options="categories.names" 
            v-model="categories.categorySelected"
          />
        </div>
      </section>

      <!-- Products Grid -->
      <section class="mb-12">
        <div class="mb-6">
          <h3 class="text-3xl font-bold text-gray-800 mb-2">
            {{ categories.categorySelected }}
          </h3>
          <p class="text-gray-600">
            {{ getProductsCategorySelected.length }} productos disponibles en esta categoría
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <template v-for="(item, index) in getProductsCategorySelected" :key="index">
            <Product :product="item" />
          </template>
        </div>
        
        <div v-if="getProductsCategorySelected.length === 0" class="text-center py-12">
          <div class="text-6xl mb-4">🤔</div>
          <h3 class="text-2xl font-semibold text-gray-600 mb-2">
            No hay productos en esta categoría
          </h3>
          <p class="text-gray-500">
            Próximamente añadiremos más productos. ¡Vuelve pronto!
          </p>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 text-center border border-purple-200">
        <h3 class="text-3xl font-bold text-gray-800 mb-4">
          ¿No encuentras lo que buscas?
        </h3>
        <p class="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
          Recuerda que lo más importante de un amigo invisible no es el precio del regalo, 
          sino el cariño y la ilusión que pongas en elegirlo.
        </p>
        <NuxtLink 
          to="/" 
          class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          <Icon name="heroicons:gift" />
          Organizar mi sorteo
        </NuxtLink>
      </section>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  if (import.meta.client) {
    window.scrollTo(0, 0)
  }
})

const categories = ref({
  names: ['Electrónica', 'Hogar y Cocina', 'Ropa y Complementos', 'Videojuegos', 'Libros'],
  categorySelected: 'Electrónica'
})

const catalog = ref([
  {
    productId: 1,
    category: 'Electrónica',
    title: 'Alexa 4ª generación',
    description: 'Echo Dot (4.ª generación) | Altavoz inteligente con Alexa | Antracita',
    url: 'https://amzn.to/3v4Y26K',
  },
  {
    productId: 2,
    category: 'Hogar y Cocina',
    title: 'Ventilador Orbegozo',
    description: 'Ventilador de 3 niveles de velocidad. Tamaño de las aspas 40cm.',
    url: 'https://amzn.to/3aVExH6',
  },
  {
    productId: 3,
    category: 'Ropa y Complementos',
    title: 'Sandalias PUMA 20',
    description: 'PUMA Popcat 20, Chanclas Unisex Adulto. Material exterior: Sintético.',
    url: 'https://amzn.to/3RMGYMF',
  },
  {
    productId: 4,
    category: 'Videojuegos',
    title: 'Nintendo Switch Sports',
    description: 'Videojuego Nintendo Sports para Nintendo Switch',
    url: 'https://amzn.to/3PFOIOH',
  },
  {
    productId: 5,
    category: 'Libros',
    title: 'Kindle Paperwhite',
    description: 'Kindle Paperwhite: ahora con una pantalla de 6,8", bordes reducidos, luz cálida ajustable.',
    url: 'https://amzn.to/3cIWTLK',
  }
])

const getProductsCategorySelected = computed(() => {
  return catalog.value.filter(product => product.category === categories.value.categorySelected)
})

// Assign all category names to the categories array
categories.value.names = [...new Set(catalog.value.map(product => product.category))]
</script>
