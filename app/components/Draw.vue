<template>
  <div class="max-w-7xl mx-auto p-6 bg-white rounded-3xl shadow-2xl border border-gray-100">
    <!-- Header -->
    <div class="text-center mb-8">
      <h2 class="text-4xl font-bold text-gray-800 mb-4">
        🎁 Sorteo Amigo Invisible
      </h2>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        Organiza tu intercambio de regalos de forma fácil y divertida
      </p>
    </div>

    <!-- Main Form Layout -->
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
      
      <!-- Participants Section - Takes 2 columns on XL screens -->
      <div class="xl:col-span-2 bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl">
        <h3 class="text-2xl font-semibold text-primary-800 mb-6 flex items-center">
          <Icon name="heroicons:users" class="mr-3 text-3xl" />
          Participantes
        </h3>
        
        <!-- Participants Grid -->
        <div class="space-y-4 mb-6">
          <div 
            v-for="(participant, index) in participants" 
            :key="index" 
            class="bg-white rounded-2xl p-4 shadow-sm border border-primary-200 hover:shadow-md transition-shadow"
          >
            <div class="flex items-center gap-4">
              <!-- Number Badge -->
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
                {{ index + 1 }}
              </div>
              
              <!-- Name Input -->
              <div class="flex-1 min-w-0">
                <label class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input 
                  v-model="participant.name"
                  type="text" 
                  placeholder="Ej: María García"
                  class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all font-medium text-gray-900 bg-white placeholder-gray-500"
                >
              </div>
              
              <!-- Email Input -->
              <div class="flex-1 min-w-0">
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  v-model="participant.email"
                  type="email" 
                  placeholder="maria@ejemplo.com"
                  class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 bg-white placeholder-gray-500"
                >
              </div>
              
              <!-- Remove Button -->
              <button 
                v-if="participants.length > 3"
                class="w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-xl flex items-center justify-center transition-colors shadow-lg flex-shrink-0 mt-6"
                @click="removeParticipant(index)"
              >
                <Icon name="heroicons:x-mark" class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <!-- Add Participant Button -->
        <button 
          class="w-full p-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-2xl font-semibold transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          @click="addParticipant"
        >
          <Icon name="heroicons:plus" class="w-6 h-6" />
          <span class="text-lg">Agregar Participante</span>
        </button>
        
        <!-- Participant Count -->
        <div class="mt-4 text-center">
          <span class="text-sm text-primary-700 bg-primary-200 px-3 py-1 rounded-full font-medium">
            {{ participants.filter(p => p.name.trim() && p.email.trim()).length }} participantes válidos
          </span>
        </div>
      </div>

      <!-- Settings Section - Takes 1 column on XL screens -->
      <div class="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-2xl">
        <h3 class="text-2xl font-semibold text-secondary-800 mb-6 flex items-center">
          <Icon name="heroicons:cog-6-tooth" class="mr-3 text-3xl" />
          Configuración
        </h3>

        <div class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              🎉 Nombre del evento
            </label>
            <input 
              v-model="eventName"
              type="text" 
              placeholder="Amigo Invisible 2025"
              class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all font-medium text-gray-900 bg-white placeholder-gray-500"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              💰 Presupuesto máximo (€)
            </label>
            <input 
              v-model="budget"
              type="number" 
              placeholder="25"
              min="0"
              class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all font-medium text-gray-900 bg-white placeholder-gray-500"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              📅 Fecha del intercambio
            </label>
            <input 
              v-model="exchangeDate"
              type="date"
              class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all font-medium text-gray-900 bg-white"
            >
          </div>

          <div class="bg-white p-4 rounded-xl border border-secondary-200">
            <div class="flex items-start gap-3">
              <input 
                v-model="allowExclusions"
                type="checkbox" 
                class="w-5 h-5 text-secondary-600 bg-gray-100 border-gray-300 rounded focus:ring-secondary-500 mt-0.5"
              >
              <div>
                <label class="text-sm font-medium text-gray-700 block">
                  🚫 Permitir exclusiones
                </label>
                <p class="text-xs text-gray-500 mt-1">
                  Evitar que ciertas personas se regalen entre sí
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
      <button 
        :disabled="participants.filter(p => p.name.trim() && p.email.trim()).length < 3"
        class="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-2xl font-bold text-lg transition-all transform hover:scale-105 disabled:scale-100 shadow-lg flex items-center justify-center gap-3 disabled:cursor-not-allowed"
        @click="performDraw"
      >
        <Icon name="heroicons:gift" class="w-6 h-6" />
        <span>Realizar Sorteo</span>
      </button>
      
      <button 
        class="px-8 py-4 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
        @click="$emit('toggleInfo')"
      >
        <Icon name="heroicons:information-circle" class="w-6 h-6" />
        <span>Mostrar/Ocultar Info</span>
      </button>
    </div>

    <!-- Results Section -->
    <div v-if="drawResults.length > 0" class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl border border-green-200 p-8">
      <h3 class="text-3xl font-bold text-green-800 mb-6 text-center">
        🎉 ¡Sorteo Completado!
      </h3>
      <div class="grid gap-4 max-w-4xl mx-auto">
        <div 
          v-for="result in drawResults" 
          :key="result.id" 
          class="bg-white p-6 rounded-2xl shadow-sm border border-green-100 hover:shadow-md transition-shadow"
        >
          <div class="flex items-center justify-center text-lg">
            <span class="font-bold text-gray-800 bg-gray-100 px-4 py-2 rounded-xl">{{ result.giver }}</span>
            <Icon name="heroicons:arrow-right" class="mx-4 text-green-600 w-6 h-6" />
            <span class="font-bold text-green-600 bg-green-100 px-4 py-2 rounded-xl">{{ result.receiver }}</span>
          </div>
        </div>
      </div>
      <div class="text-center mt-6 p-4 bg-green-100 rounded-2xl">
        <p class="text-green-700 font-medium text-lg">
          📧 Se han enviado los correos electrónicos a todos los participantes
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineEmits(['toggleInfo'])

const participants = ref([
  { name: '', email: '' },
  { name: '', email: '' },
  { name: '', email: '' }
])

const eventName = ref('Amigo Invisible 2025')
const budget = ref(25)
const exchangeDate = ref('')
const allowExclusions = ref(false)
const drawResults = ref([])

function addParticipant() {
  participants.value.push({ name: '', email: '' })
}

function removeParticipant(index) {
  if (participants.value.length > 3) {
    participants.value.splice(index, 1)
  }
}

function performDraw() {
  if (participants.value.length < 3) return
  
  // Filtrar participantes válidos
  const validParticipants = participants.value.filter(p => p.name.trim() && p.email.trim())
  
  if (validParticipants.length < 3) {
    alert('Necesitas al menos 3 participantes con nombre y email válidos')
    return
  }

  // Algoritmo simple de sorteo
  const shuffled = [...validParticipants]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  // Crear parejas (cada uno da regalo al siguiente en la lista)
  const results = []
  for (let i = 0; i < shuffled.length; i++) {
    const giver = shuffled[i]
    const receiver = shuffled[(i + 1) % shuffled.length]
    results.push({
      id: i,
      giver: giver.name,
      receiver: receiver.name,
      giverEmail: giver.email,
      receiverEmail: receiver.email
    })
  }

  drawResults.value = results

  // Aquí normalmente enviarías los emails
  console.log('Resultados del sorteo:', results)
  alert('¡Sorteo completado! En una implementación real, se enviarían los correos electrónicos.')
}
</script>
